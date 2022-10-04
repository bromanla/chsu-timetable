const api = require('./chsu.api')
const tommorowDate = require('./tommorow.date')
const getMessage = require('./get.message')
const sendMessage = require('./send.message')

const username = process.env.API_USERNAME
const password = process.env.API_PASSWORD
const groupId = process.env.API_GROUP_ID
const accessToken = process.env.VK_TOKEN
const peerId = process.env.VK_PEER_ID

module.exports = api.getApiToken(username, password)
  .then(({ data: token }) => api.getTimetable(token, groupId, tommorowDate.string))
  .then((timetable) => getMessage(timetable, tommorowDate))
  .then((message) => sendMessage(peerId, message, accessToken))
  .then((res) => console.log(res))
  .catch((err) => console.error(err))

/**
 * You can get group id here
 * http://api.chsu.ru/api/group/v1/
 */
