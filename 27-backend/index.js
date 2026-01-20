import express,{json} from "express"
import { router } from "./Routes/route.js";

const app = express();
const port = 8080;
app.use(json())
app.use('/', router)


app.get("/", (req, res) =>{
    res.send("Hi welcome to Home")})

app.post('/aboutus', (req, res) =>{
    res.send("Hi welcome to About Us")})

app.get('/contactus', (req, res) =>{
    res.send("Hi welcome to ContactUs")})

app.get('/logout', (req, res) => {
    res.send("Logout")
})
app.post('/', (req, res) => {
    res.send("hi")
})
app.listen(port, () => {
    console.log("server listening on port 8080");
})