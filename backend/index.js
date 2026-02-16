//import
const express = require('express')  
require('./conection')
var stuModel = require('./model/student')
var cors = require('cors')  

//initialize 
const app = express()

//middleware
app.use(cors())
app.use(express.json())

//api creation
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/sample', (req, res) => {
  res.send('HI Sinu Welcome')
})

app.post('/add', (req, res) => {
    stuModel(req.body).save()
    res.send('Data Added')
})
//get data

app.get('/view', async (req, res) => {
    var data = await stuModel.find()
    res.send(data)
})
//delete data
app.delete('/delete/:id', async (req, res) => {
     await stuModel.findByIdAndDelete(req.params.id)
    res.send('Data Deleted')
})
//update data
app.put('/update/:id', async (req, res) => {
     await stuModel.findByIdAndUpdate(req.params.id, req.body)
    res.send('Data Updated')
})


app.listen(3004, () => {
  console.log('Server is running on http://localhost:3004')
})