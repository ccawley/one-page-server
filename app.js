const express = require('express')
const app = express()
const port = 3000

const listener = () => console.log(`Heckin' dang doggos party on port ${port}!`)
app.listen(port, listener)

app.get('/dogs', (req, res) => {
  const message = 'WOOF!'
  console.log(`I AM SERVER, BORK, ${message}`)
  res.send(`RESPONSE TO CLIENT, BORK ${message}`)
})

app.get('/ping', (req, res) => {
  const message = 'pong!'
  console.log(`ON THE SERVER: ${message}`)
  res.setHeader('content-type', 'text/html');
  res.send(`<h1>Now you're cooking with oil!</h1>`)
})
