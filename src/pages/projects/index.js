import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import GithubStats from '../../components/github-stats'

import * as styles from './index.module.scss'

import { projects } from '../../data/projects'

const ProjectsPage = () => {
  return (
    <Layout>
      <SEO title="~/projects" />
      <h1>~/projects</h1>
      <div>
        This page lists my original projects. To see my solutions to coding
        challenges, freeCodeCamp, and other ventures,{' '}
        <Link to={`/projects/misc/`}>click here</Link>.
      </div>
      <div className={styles.container}>
        {projects.map((type) => (
          <div key={type.label} className={styles.projectContainer}>
            <h3>{type.label}</h3>
            <div className={styles.projects}>
              {type.items.map((project) => (
                <div key={project.name} className={`${styles.project} shadow`}>
                  <GithubStats initialProject={project} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default ProjectsPage
