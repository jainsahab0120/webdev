
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
//   res.send('Hello World!')
  res.send('chal gya bhai log');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  // Send a POST request to the server to test the route
})