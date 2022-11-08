import axios from 'axios'

import { MASTODON_ID } from '../constants'
const baseUrl = 'https://mastodon.social/api/v1/'

export const fetchData = async () => {
  try {
    const { data } = await axios({
      method: 'get',
      url: `${baseUrl}accounts/${MASTODON_ID}/statuses`,
      timeout: 5000,
    })
    return { status: 'resolved', data }
  } catch (error) {
    return { status: 'rejected', error: error.message }
  }
}
