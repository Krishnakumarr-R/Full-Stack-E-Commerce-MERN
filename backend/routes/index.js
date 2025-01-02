const express = require('express')

const router= express.Router() 

const userSignUpController = require('../controller/userSignup')
const userSignInController = require('../controller/userSignin')
const userDetailsController = require('../controller/userDetails')
const authToken = require('../middleware/authToken')
const userLogout = require('../controller/userLogout')
const allUsers=require('../controller/allUsers')


router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/user-details",authToken,userDetailsController)
router.get("/userlogout",userLogout)

//admin panel;

router.get("/all-users",allUsers)

module.exports=router