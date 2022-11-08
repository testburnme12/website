import React from 'react'
import { Link } from 'gatsby'

import * as styles from './toc.module.scss'

import useActiveId from '../hooks/use-active-id'

function getIds(items) {
  return items.reduce((acc, item) => {
    if (item.url) {
      acc.push(item.url.slice(1))
    }
    if (item.items) {
      acc.push(...getIds(item.items))
    }
    return acc
  }, [])
}

function renderItems(items, activeId) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.url}>
          <Link
            to={item.url}
            style={{
              borderBottom:
                activeId === item.url.slice(1) ? '1px solid gray' : '0',
            }}
          >
            {item.title}
          </Link>
          {item.items && renderItems(item.items, activeId)}
        </li>
      ))}
    </ul>
  )
}

const TOC = ({ items }) => {
  const idList = getIds(items)
  const activeId = useActiveId(idList)

  return (
    <div className={styles.container}>
      <details className={styles.details} open>
        <summary>Contents</summary>
        {renderItems(items, activeId)}
      </details>
    </div>
  )
}

export default TOC
