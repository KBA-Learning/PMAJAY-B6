import { Router } from "express";
import { course } from "./adminroute.js";

const user = Router();

user.get('/getCourseByName',(req,res)=>{
    try {
        // console.log("course");
        console.log(req.query);
            const data = req.query;
            console.log(data.CourseName);
            const key = req.query.CourseName;
        
        try {
            
            const result = course.get(key);
            // console.log(result);
             if (result) {
            res.status(200).json({ result })
        }
        else {
            res.status(404).json({ msg: "Course not found" })
        }
            
        }
        
    catch {
            res.status(400).json({ msg: 'Something gone wrong on getting or fetching data' })
        }
        // console.log(result);
        
    }
    
    catch{
        res.status(500).json({msg:"Internal Server error"})
    }
})

user.get('/getCourse/:name',(req,res)=>{
    try {
        // console.log("course");
         console.log(req.params);
            const data = req.params.name;
            console.log(data);
            
        
    const key = req.params.name;
        
        try {
           
            const result = course.get(key);
             if(result){
        res.status(200).json({result})
    }
    else{
        res.status(404).json({msg:"Course not found"})
    }
    }
    catch{
        res.status(400).json({msg:'Something gone wrong on getting or fetching data'})
    }
   
    }
    catch{
        res.status(500).json({msg:"Internal Server error"})
    }
})

user.get("/getAllCourse", (req, res) => {
    try {
       
        
        res.status(200).json(Object.fromEntries(course))
    }
    catch {
        res.status(500).json("Internal Server Error")
}
})


export default user;