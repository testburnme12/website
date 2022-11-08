import React, { useState } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const UnixPermsPage = () => {
  const [input, setInput] = useState('7777')

  const isValidInput = (input) => /^[0-7]{0,4}$/.test(input)

  const getOctal = (input) => (input.length > 2 ? input.padStart(4, '0') : null)

  const parsePerms = (input) => {
    if (!input) return 'No input'
    if (input.length < 3) return 'Input must be at least 3 digits'

    let perms = {
      ru: false, // read user
      rg: false, // read group
      ro: false, // read other
      wu: false, // write user
      wg: false, // write group
      wo: false, // write other
      xu: false, // execute user
      xg: false, // execute group
      xo: false, // execute other
      su: false, // setuid
      sg: false, // setgid
      sb: false, // sticky bit
    }
    let parts = input
      .padStart(4, '0')
      .split('')
      .map((n) => parseInt(n, 8))

    perms.ru = (parts[1] >> 2) & 0x1
    perms.rg = (parts[2] >> 2) & 0x1
    perms.ro = (parts[3] >> 2) & 0x1

    perms.wu = (parts[1] >> 1) & 0x1
    perms.wg = (parts[2] >> 1) & 0x1
    perms.wo = (parts[3] >> 1) & 0x1

    perms.xu = parts[1] & 0x1
    perms.xg = parts[2] & 0x1
    perms.xo = parts[3] & 0x1

    perms.su = (parts[0] >> 2) & 0x1
    perms.sg = (parts[0] >> 1) & 0x1
    perms.sb = parts[0] & 0x1

    const getSymbols = (perms) => {
      let output = '-'

      output += perms.ru ? 'r' : '-'
      output += perms.wu ? 'w' : '-'
      if (perms.xu && perms.su) {
        output += 's'
      } else if (perms.su) {
        output += 'S'
      } else if (perms.xu) {
        output += 'x'
      } else {
        output += '-'
      }

      output += perms.rg ? 'r' : '-'
      output += perms.wg ? 'w' : '-'
      if (perms.xg && perms.sg) {
        output += 's'
      } else if (perms.sg) {
        output += 'S'
      } else if (perms.xg) {
        output += 'x'
      } else {
        output += '-'
      }

      output += perms.ro ? 'r' : '-'
      output += perms.wo ? 'w' : '-'
      if (perms.xo && perms.sb) {
        output += 't'
      } else if (perms.sb) {
        output += 'T'
      } else if (perms.xo) {
        output += 'x'
      } else {
        output += '-'
      }

      return output
    }

    const output = `
Numeric notation: ${getOctal(input)}
Symbolic notation: ${getSymbols(perms)}

Flags:
+------------+-------------+
| setuid     |   ${perms.su ? 'set    ' : 'not set'}   |
+------------+-------------+
| setgid     |   ${perms.sg ? 'set    ' : 'not set'}   |
+------------+-------------+
| sticky bit |   ${perms.sb ? 'set    ' : 'not set'}   |
+------------+-------------+

Permissions:
+---------+-------+-------+-------+
|         | User  | Group | Other |
+---------+-------+-------+-------+
| Read    |   ${perms.ru ? 'x' : ' '}   |   ${perms.rg ? 'x' : ' '}   |   ${
      perms.ro ? 'x' : ' '
    }   |
+---------+-------+-------+-------+
| Write   |   ${perms.wu ? 'x' : ' '}   |   ${perms.wg ? 'x' : ' '}   |   ${
      perms.wo ? 'x' : ' '
    }   |
+---------+-------+-------+-------+
| Execute |   ${perms.xu ? 'x' : ' '}   |   ${perms.xg ? 'x' : ' '}   |   ${
      perms.xo ? 'x' : ' '
    }   |
+---------+-------+-------+-------+
`
    return output
  }

  return (
    <Layout>
      <SEO title="~/unix-perms" />
      <h1>/unix-perms</h1>
      <p>
        <a href="https://en.wikipedia.org/wiki/File-system_permissions">
          Unix file system permissions
        </a>{' '}
        visualizer.
      </p>
      <div style={{ marginBottom: '5rem' }}>
        <form>
          <input
            type="text"
            name="input"
            id="input"
            placeholder="Octal representation"
            value={input}
            onChange={(e) =>
              setInput(isValidInput(e.target.value) ? e.target.value : input)
            }
          />
        </form>
        <pre
          style={{
            padding: 'unset',
            background: 'unset',
          }}
        >
          {parsePerms(input)}
        </pre>
      </div>
    </Layout>
  )
}

export default UnixPermsPage
