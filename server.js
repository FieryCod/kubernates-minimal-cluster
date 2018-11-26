const app = require('express')()

app.get('/', (req, res) => {
  console.log(`Retrieved request with headers: \n${JSON.stringify(req.headers, null, 2)}`)

  res.send('Hello from Node.js')
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
