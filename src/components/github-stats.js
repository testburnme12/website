import React, { useState, useEffect } from 'react'

import * as styles from './github-stats.module.scss'

import { fetchGitHubData } from '../services/github-api'

import { formatNumber } from '../utils/format-number'

const GithubStats = ({ initialProject }) => {
  const [projectData, setprojectData] = useState({
    description: initialProject.description,
    homepage: initialProject.homepage,
    stars: initialProject.stars,
    forks: initialProject.forks,
  })
  const starsgazersUrl = `${initialProject.repository}stargazers`
  const forksUrl = `${initialProject.repository}network/members`

  useEffect(() => {
    const getData = async () => {
      const res = await fetchGitHubData(initialProject)
      setprojectData(res)
    }

    if (!initialProject.private) getData(initialProject)
  }, [initialProject])

  return (
    <>
      <a
        href={`${projectData.homepage || initialProject.repository}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        {`${initialProject.name}`}
      </a>
      :{' '}
      {projectData.description
        .replace("@rsapkf's ", '')
        .replace(/^\w/, c => c.toUpperCase())}
      <br />
      {!initialProject.private && initialProject.homepage && (
        <a href={initialProject.repository}>Source</a>
      )}
      {initialProject.builtWith && <> [{initialProject.builtWith}]</>}
      {!initialProject.private && projectData.stars > 0 && (
        <div className={styles.metrics}>
          <span className={styles.metric}>Stars</span>
          <a href={starsgazersUrl} className={styles.metricCount}>
            {formatNumber(projectData.stars)}
          </a>{' '}
          <span className={styles.metric}>Forks</span>
          <a href={forksUrl} className={styles.metricCount}>
            {formatNumber(projectData.forks)}
          </a>
        </div>
      )}
    </>
  )
}

export default GithubStats
