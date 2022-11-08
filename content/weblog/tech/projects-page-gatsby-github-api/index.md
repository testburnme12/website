---
title: Implementing /projects page on Gatsby site with GitHub API
date: 2020-07-12
lastUpdated: 2020-07-13
spoiler: ''
tags: ['gatsby', 'github', 'react', 'programming']
type: tech
slug: q6x
---

On <Link to='/projects'>/projects</Link>, I am using GitHub's REST API to populate the stars count, forks count, description and homepage for my projects hosted on GitHub. Let's see how!

We'll be using functional components and as such React's `useEffect` and `useState` Hooks. Some other things you should be familiar with are template strings, `async/await`, destructuring and `try/catch`.

First, create a file named `github-api.js` in `src/services` directory and copy the following code into the file:

```jsx{numberLines: true}
import axios from 'axios'

const GITHUB_USERNAME = '<YOUR_GITHUB_USERNAME>'
const baseUrl = 'https://api.github.com/'

export const fetchData = async project => {
  try {
    const {
      data: { description, homepage, stargazers_count, forks_count },
      // highlight-start
    } = await axios({
      method: 'get',
      url: `${baseUrl}repos/${GITHUB_USERNAME}/${project.name}`,
      timeout: 3000,
    })
    // highlight-end
    return {
      description,
      homepage,
      starsCount: stargazers_count,
      forksCount: forks_count,
    }
  } catch (error) {
    return project
  }
}
```

We are using [axios](https://github.com/axios/axios) to make requests. We could also use the native `fetch` API for this but `axios` makes it very easy to set timeout, cancel requests and set authorization headers if we need to authenticate with an access token. GitHub API requires a token to make 60+ requests per hour.

The asynchronous function `fetchData` takes in a `project` object as an argument and calls the API, then returns an object with `description`, `homepage`, `stargazersCount`, `forksCount` properties. If the request fails, the function will return the initial value for `project` that we can use as a fallback.

We will be importing the `fetchData` function in our component and call it inside the useEffect hook.

Create a component in `src/components` called `github-stats.js` and put the following code inside:

```jsx{numberLines: true}
import React, { useState, useEffect } from 'react'
import { fetchData } from '../services/github-api'

const GITHUB_USERNAME = '<YOUR_GITHUB_USERNAME>'

const GitHubStats = ({ project }) => {
  const [starsCount, setStarsCount] = useState(project.starsCount)
  const [forksCount, setForksCount] = useState(project.forksCount)
  const [description, setDescription] = useState(project.description)
  const [homepage, setHomepage] = useState(project.homepage)

  const starsgazersUrl = `https://github.com/${GITHUB_USERNAME}/${project.name}/stargazers`
  const forksUrl = `https://github.com/${GITHUB_USERNAME}/${project.name}/network/members`

  useEffect(() => {
    const fetchGitHubData = async () => {
      const res = await fetchData(project)

      setDescription(res.description)
      setHomepage(res.homepage)
      setStarsCount(res.starsCount)
      setForksCount(res.forksCount)
    }

    fetchGitHubData()
  }, [project])

  return (
    <>
      <a href={`https://github.com/${GITHUB_USERNAME}/${project.name}`}>
        {`${GITHUB_USERNAME}/${project.name}`}
      </a>
      : {description}
      <br />
      {homepage && (
        <>
          Homepage: <a href={homepage}>{homepage}</a>
        </>
      )}
      <br />
      Stars: <a href={starsgazersUrl}>{starsCount}</a> • Forks: <a href={forksUrl}>{forksCount}</a>
    </>
  )
}

export default GitHubStats
```

The GitHubStats component takes a `project` object as a prop and calls the fetchData function which returns an object with `description`, `homepage`, `starsCount` and `forksCount` keys. On a succesfull API call, these keys will be populated with latest data from GitHub. If the API call fails, these values will contain the respective values for keys in the `project` object that we pass.

Now, we can import the `GitHubStats` component in our `src/pages/projects.js` page:

```jsx{numberLines: true}
import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import GitHubStats from '../components/github-stats'

const projects = [
  {
    name: 'project-one',
    description: 'Project One description.',
    homepage: 'https://project-one.org/',
    starsCount: 10,
    forksCount: 5,
  },
  {
    name: 'project-two',
    description: 'Project Two description.',
    homepage: 'https://project-two.org/',
    starsCount: 5,
    forksCount: 2,
  },
]

const ProjectsPage = () => {
  return (
    <Layout>
      <ul>
        {projects.map(project => (
          <li key={project.name}>
            <GitHubStats project={project} />
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default ProjectsPage
```

We create an array of objects with backup data to use if API call fails. Then, we map through each project and render `GitHubStats` component passing in the `project` as prop. And that's it!

Some things you could now try might be styling the page or separating the backup data into a directory for better [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns).
