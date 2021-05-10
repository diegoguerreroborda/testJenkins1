const express = require('express')
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json())

const port = 3000

app.get('/', (req, res) => {
    res.send('Hola mundo!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })