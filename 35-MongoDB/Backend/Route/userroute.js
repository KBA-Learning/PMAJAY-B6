import { Router } from "express";

const router = Router()

router.get("/homepage", (req, res) => {
    res.send("Routing")
})

router.post("/signup", (req, res) => {
    try {
        const { username, password, emailid } = req.body;
        console.log(username);
        console.log(password)
        res.status(201).send("successfully signedup")

    }
    catch {
        res.send(error)
    }
})

export { router }