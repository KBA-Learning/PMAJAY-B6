import express from "express"

const app = express()
const port = 8000

app.get('/', (req, res) => {
    res.send("Welcome To the main page")
    
})


app.listen(port, () => {
    console.log(`server is listening to port number ${port}`);
    
})