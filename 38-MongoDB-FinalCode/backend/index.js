import express, { json } from "express"
import dotenv from "dotenv"
import user from "./routes/userRoute.js"
import { admin } from "./routes/adminRoute.js"
import { authenticate } from "./middleware/auth.js"
import admincheck from "./middleware/admin.js"
import course from "./routes/courseRoute.js"
import mongoose from "mongoose"
import cart from "./routes/cartRoute.js"


dotenv.config()

const app = express()
app.use(json())
app.use("/user", user)
app.use("/admin", authenticate, admincheck, admin)
app.use("/course", course)
app.use("/cart", authenticate, cart)

app.get("/", (req, res) => {
    res.send("Welcome to the website")
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