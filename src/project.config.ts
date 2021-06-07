const config = {
  apiHostname: process.env.REACT_APP_API_HOSTNAME || 'http://127.0.0.1:8008',
  wsEndpoint: process.env.REACT_APP_WS_ENDPOINT || 'ws://127.0.0.1:8008/ws',
}

export default config
