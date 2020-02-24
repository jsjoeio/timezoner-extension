import axios from 'axios'

const options = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 11000
}

interface Params {
  [key: string]: string
}

export const generateQueryString = (params: Params) => {
  return Object.keys(params)
    .map(key => {
      return `?${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    })
    .join('&')
}

export const wakeUpServer = () => {
  return axios
    .get('https://timezoner-server.now.sh/', options)
    .then(function(response) {
      return response.data
    })
    .catch(function(error) {
      console.log(error)
    })
}

export const getBitlink = (url: string, options?: {}) => {
  return axios
    .post(
      'https://timezoner-server.now.sh/api/bitly/',
      {
        long_url: url
      },
      options
    )
    .then(function(response) {
      return response.data
    })
    .catch(function(error) {
      console.log(error)
    })
}
