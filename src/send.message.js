const https = require('https')
const responseHandler = require('./response.handler')

const sendMessage = (peerId, message, accessToken) => new Promise((resolve, reject) => {
  const version = '5.131'
  const randomId = Date.now()

  const options = {
    method: 'GET',
    hostname: 'api.vk.com',
    path: `/method/messages.send?peer_id=${peerId}&message=${encodeURI(message)}&access_token=${accessToken}&v=${version}&random_id=${randomId}`,
  }

  const req = https.request(options, (res) => responseHandler(resolve, reject, res))

  req.end()
})

module.exports = sendMessage
