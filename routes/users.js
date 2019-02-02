const express=  require('express')
const router =  express.Router()
const JWT = require('jsonwebtoken')

const { JWT_SECRET } = require('../config/config')

//create a  JWT token function
tokenFunc = user =>{
    return JWT.sign({
        iss : 'zhm',
        sub: user.id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate()  + 1 )
    }, JWT_SECRET)
}

const User = require('../models/user')

router.post('/register', async(req,res,next) =>{
    const { email, password } = req.body

    const userExist = await User.findOne({email})    
    if (userExist){
        return res.status(404).json({error:"Used email"})
    }

    const newUser = new User({email, password })
    await newUser.save()

    //Generate/use the token form token func above
    const token = tokenFunc(newUser)

    res.status(200).json({token})
})

router.post('/login', async(req,res,next) =>{
    console.log('login')
})

router.get('/secret', async(req,res,next) =>{
    console.log('secret')
})


module.exports = router