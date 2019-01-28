const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/users')

const app = express()

mongoose.connect('mongodb://localhost/auth', {useNewUrlParser:true})


//middleware
app.use(express.json())
app.use('/users', userRoutes)


//routes
app.get('/', async(req,res,next) =>{
    res.send('ok')
})


const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`Started on port ${PORT}`))
