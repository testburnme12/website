import React, { useState } from 'react'
import { navigate } from 'gatsby-link'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

import * as styles from './form.module.scss'

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const ContactFormPage = () => {
  const [state, setState] = useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
    <Layout>
      <SEO title="~/contact/form" />
      <h1>~/contact/form</h1>
      <form
        className={styles.form}
        name="contact"
        method="post"
        action="/thanks"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don't fill this out:{' '}
            <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Name
            <br />
            <input
              type="text"
              name="name"
              placeholder=""
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            Email*
            <br />
            <input
              type="email"
              name="email"
              placeholder=""
              onChange={handleChange}
              required
            />
          </label>
        </p>
        <p>
          <label>
            Subject*
            <br />
            <select
              name="subject"
              id="subject"
              defaultValue="feedback"
              onBlur={handleChange}
              required
            >
              <option value="feedback">Feedback</option>
              <option value="bug-report">Bug report</option>
              <option value="business">Business</option>
              <option value="open-source">Open source</option>
              <option value="cubing">Cubing</option>
              <option value="hi">Say hi</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Message*
            <br />
            <textarea
              name="message"
              placeholder=""
              onChange={handleChange}
              required
            />
          </label>
        </p>
        <button type="submit">Send</button>
      </form>
    </Layout>
  )
}

export default ContactFormPage
