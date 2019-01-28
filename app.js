const express = require('express')

const app = express()


//middleware
app.use(express.json())

//routes
app.get('/', async(req,res,next) =>{
    res.send('ok')
})


const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`Started on port ${PORT}`))
