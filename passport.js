const passport = require('passport')
const jwtStrategy = require('passport-jwt').Strategy
const { ExtractJwt } = require("passport-jwt")
const { JWT_SECRET } = require('./config/config')
const User = require('./models/user')

passport.use(new jwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey : JWT_SECRET
}, async(payload,done)=>{
    try{
        //find user in token . 
        const user = await User.findById(payload.sub)
        //if no user return 
        if (!user){
            return done(null, false)
        }
        // else return user
        done(null, user)
    }catch(error){
        done(error, false)
    }
}))