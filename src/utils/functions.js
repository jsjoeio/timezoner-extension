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
