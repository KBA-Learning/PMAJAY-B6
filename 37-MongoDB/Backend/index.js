import express, { json } from "express"
import dotenv from "dotenv"
import  user  from "./Route/userroute.js"
import { admin } from "./Route/adminroute.js"
import { authenticate } from "./Middleware/auth.js"
import admincheck from "./Middleware/admin.js"
import course from "./Route/courseroute.js"
import mongoose from "mongoose"


dotenv.config()

const app = express()
app.use(json())
app.use("/user", user)
app.use("/admin", authenticate, admincheck, admin)
app.use("/course", course)

app.get("/", (req, res) => {
    res.send("Welcome to the website")
})

app.get("/homepage", (req, res) => {
    res.send("welcome to homepage")
    console.log("welcome to homepage")
})

const mongodbURI = process.env.MONGODB_URI || "mongodb://localhost:27017/KBA-COURSE"
mongoose.connect(mongodbURI).then(() => {
    console.log("MongoDB connected")
}).catch((err) => {
    console.log("MongoDB connection error:", err)
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`SERVER is running at ${PORT}`);
})