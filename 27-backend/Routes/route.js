import { Router } from "express";
const router = Router()

router.get("/welcome", (req, res) => {
    res.send("Routing")
})

router.post("/signup", (req, res) => {
    try {
        const { username, Password, emailid } = req.body
        res.send("signed up succesfully")
        console.log(username);
        

            // return res.status(201).json({
            //     message: "User signed up successfully"
            // });
        }
    
    catch {
        res.send(error)
    }
})

export {router}