import React, { useState } from 'react'

import { copyToClipboard } from '../utils/copy-to-clipboard'

export const CopyPermalink = ({ link }) => {
  const [permalinkButtonText, setPermalinkButtonText] = useState('Permalink')
  return (
    <button
      onClick={() => {
        copyToClipboard(link)
        setPermalinkButtonText('Copied')
        setTimeout(() => setPermalinkButtonText('Permalink'), 1500)
      }}
      style={{
        fontSize: '0.85rem',
        padding: '0',
        border: 'none',
        backgroundColor: 'transparent',
      }}
    >
      {permalinkButtonText}
    </button>
  )
}
