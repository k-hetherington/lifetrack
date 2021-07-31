const express = require("express")
const Sleep = require("../models/sleep")
const security = require("../middleware/security")
const router = express.Router()

router.post("/", security.requireAuthenticatedUser, async(req, res, next)=>{
    try {
        const user = res.locals.user
        const sleeps = await Sleep.createSleep({ newSleep:req.body, user })
        return res.status(201).json({ sleeps })
    } catch (error) {
        next(error)
    }
})

module.exports = router;