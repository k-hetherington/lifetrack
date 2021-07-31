const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const { PORT } = require("./config")
const {NotFoundError} = require("./utils/errors")
const authRoutes = require("./routes/auth")
const sleepRoutes = require("./routes/sleeps")
const security = require("./middleware/security")
const profileRoutes = require("./routes/profile")
const settings = require("./routes/settings")

const app = express()

//Obehi
app.use(cors())
app.use(express.json())
app.use(morgan("tiny"))

//attach credentials to res.locals.user
app.use(security.extractUserFromJwt)
//Login and Register
app.use("/auth", authRoutes)
// Sleep Page
app.use("/sleep", sleepRoutes)
//Profile page
app.use("/profile", profileRoutes)
//Profile Recents page
app.use("/profile/recents", profileRoutes)

app.use("/settings", settings)



app.get("/", async (req, res, next) => {
  res.status(200).json({ ping: "pong" })
})

//added in error handling
app.use((req, res, next)=>{
  return next(new NotFoundError)
})

//Generic error handler; anything unhandled goes here. 
app.use((err, req, res, next) => {
  const status = err.status || 500
  const message = err.message

  return res.status(status).json({
    error: { message, status },
  })
})


//Backend Port 3001
app.listen(PORT, ()=> {
  console.log(`🚀 Server listening on http://localhost:3001`)
})


