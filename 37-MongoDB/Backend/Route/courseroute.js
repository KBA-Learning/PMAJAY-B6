import { Router } from "express";
// import { course } from "./adminroute.js";
import Course from "../Models/courseModel.js";
import sharp from 'sharp';



const course = Router();

course.get('/getCourseByName', async (req, res) => {
    try {
        const CourseName = req.query.CourseName;
        if (!CourseName) {
            return res.status(400).json({
                msg: "CourseName query parameter required"
            });
        }

        const result = await Course.findOne({ courseName: CourseName });
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

course.get('/getCourseImage', async (req, res) => {
    try {
        const CourseName = req.query.CourseName;
        if (!CourseName) {
            return res.status(400).json({
                msg: "CourseName query parameter required"
            });
        }

        const result = await Course.findOne({ courseName: CourseName });
        if (!result) {
            return res.status(404).json({
                msg: "Course not found"
            });
        }

        if (!result.image) {
            return res.status(404).json({
                msg: "Image not found for this course"
            });
        }

        const imageBuffer = Buffer.from(result.image, "base64");
        const compressedImage = await sharp(imageBuffer).resize({ width: 300 }).jpeg({ quality: 70 }).toBuffer();
        res.set({
            "Content-Type": "image/png",
        });

        res.send(compressedImage);
        // res.status(200).json({ result })

    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server error" })
    }
})

course.get('/getCourse/:name', async (req, res) => {
    try {
        
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

course.get("/getAllCourse", async (req, res) => {
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

export default course;