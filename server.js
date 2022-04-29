const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

const test = {
   text: 'asd',
   number: 3,
}
app.get('/api', (req, res) => {
   res.send(test)
})

app.listen(1234, () => {
   console.log('Server running at: http://localhost:1234')
})
