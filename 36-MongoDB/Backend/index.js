import express, { json } from "express"
import dotenv from "dotenv"
import { router } from "./Route/trialrout.js"
import { admin } from "./Route/adminroute.js"
import { authenticate } from "./Middleware/auth.js"
import admincheck from "./Middleware/admin.js"
import user from "./Route/courseroute.js"
import mongoose from "mongoose"


dotenv.config()

const app = express()
app.use(json())
app.use("/user", router)
app.use("/admin", authenticate, admincheck, admin)
app.use("/", authenticate, user)

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


app.listen(process.env.port, () => {
    console.log(`SERVER is running at ${process.env.port}`);
})