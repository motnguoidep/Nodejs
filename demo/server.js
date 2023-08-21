const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World with me')
})
app.get('/about', (req, res) => {
    res.send(`I'm Xuan thuong xinh dep`)
})

app.listen(8080)