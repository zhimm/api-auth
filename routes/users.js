const express=  require('express')
const router =  express.Router()
const User = require('../models/user')

router.post('/register', async(req,res,next) =>{
    const { email, password} = req.body

    const userExist = await User.findOne({email})    
    if (userExist){
        return res.status(404).json({error:"Used email"})
    }

    const newUser = new User({email, password })
    await newUser.save()

    res.json("User created")

})

router.post('/login', async(req,res,next) =>{
    console.log('login')
})

router.get('/secret', async(req,res,next) =>{
    console.log('secret')
})


module.exports = router