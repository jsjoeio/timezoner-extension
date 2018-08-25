import axios from 'axios'

export const generateQueryString = params => {
  return Object.keys(params)
    .map(key => {
      return `?${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    })
    .join('&')
}

export const getBitlink = (url, options) => {
  return axios
    .post(
      'https://api-ssl.bitly.com/v4/shorten',
      {
        group_guid: 'Bhcedh2pCq5',
        domain: 'bit.ly',
        long_url: url
      },
      options
    )
    .then(function(response) {
      return response.data.link
    })
    .catch(function(error) {
      console.log(error)
    })
}
