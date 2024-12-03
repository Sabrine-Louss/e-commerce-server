const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
app.use(express.json())
app.use(cors())
//database connection
const connectDB = require("./config/connectDB")
connectDB()
//routes configuration
app.use("/api/user",require("./routes/userRoutes"))
app.use("/api/admin",require("./routes/adminRoutes"))

//port connection 
const port = process.env.PORT || 8081
app.listen(port,()=> console.log("my server is running on port",port))