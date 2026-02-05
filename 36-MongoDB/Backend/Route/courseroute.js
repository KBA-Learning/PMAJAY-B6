import { Router } from "express";
// import { course } from "./adminroute.js";
import Course from "../Models/courseModel.js";


const user = Router();

user.get('/getCourseByName', async (req, res) => {
    try {
        // console.log("course");
        console.log(req.query);
        const data = req.query;
        console.log(data.CourseName);
        const CourseName = req.query.CourseName;
        // const key = req.query.CourseName;

        if (!CourseName) {
            return res.status(400).json({
                msg: "CourseName query parameter required"
            });
        }


        // const result = course.get(key);
        const result = await Course.findOne({ courseName: CourseName });
        // console.log(result);
        if (result) {
            res.status(200).json({ result })
        }
        else {
            res.status(404).json({ msg: "Course not found" })
        }


        // console.log(result);

    }

    catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server error" })
    }
})

user.get('/getCourse/:name', async (req, res) => {
    try {
        // console.log("course");
        console.log(req.params);
        const data = req.params.name;
        console.log(data);

        const courseName = req.params.name;
        // const key = req.params.name;

        // const result = course.get(key);
        const result = await Course.findOne({ courseName: courseName });
        if (result) {
            res.status(200).json({ result })
        }
        else {
            res.status(404).json({ msg: "Course not found" })
        }


    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server error" })
    }
})

user.get("/getAllCourse", async (req, res) => {
    try {
        const allCourses = await Course.find();
        res.status(200).json(allCourses);
        //   res.status(200).json(Object.fromEntries(course))

    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server error" })
    }
})



export default user;