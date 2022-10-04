const http = require('http')
const responseHandler = require('./response.handler')

const getApiToken = (username, password) => new Promise((resolve, reject) => {
  const body = JSON.stringify({ username, password })

  const options = {
    method: 'POST',
    hostname: 'api.chsu.ru',
    path: '/api/auth/signin',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': body.length,
    }
  }

  const req = http.request(options, (res) => responseHandler(resolve, reject, res))

  req.write(body)
  req.end()
})

const getTimetable = (token, groupId, date) => new Promise((resolve, reject) => {
  const options = {
    method: 'GET',
    hostname: 'api.chsu.ru',
    path: `/api/timetable/v1/from/${date}/to/${date}/groupId/${groupId}/`,
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  }

  const req = http.request(options, (res) => responseHandler(resolve, reject, res))

  req.end()
})

module.exports = { getApiToken, getTimetable }
