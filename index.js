const express = require('express')
const app = express()

const port = 3000
const sketch = require('./public/sketch')
const cors = require("cors")

app.use(cors())
app.use(express.static("public"))

app.get('/', (req, res) => {
  res.sendFile("index.html", { root: __dirname })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})