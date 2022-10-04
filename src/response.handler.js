const responseHandler = (resolve, reject, res) => {
  const chunks = []

  res.on('data', (chunk) => chunks.push(chunk))

  res.on('end', () => {
    const body = Buffer.concat(chunks).toString()
    resolve(JSON.parse(body))
  })

  res.on('error', (error) => reject(error))
}

module.exports = responseHandler
