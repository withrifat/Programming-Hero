const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

//  recourse sheering 
app.use(cors({

}))
//  when data come we give permission with this 
app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello World after nodemon')
})
app.get('/hi', (req, res) => {
  res.send('How are you ')
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
