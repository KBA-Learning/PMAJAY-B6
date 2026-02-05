
**Course Schema**

```bash

import { Schema } from "mongoose";
import { model } from "mongoose";

const courseSchema = new Schema({
    courseName: { type: String, unique: true },
    courseId: String,
    courseType: String,
    description: String,
    price: Number
});

const Course = model("courses", courseSchema);

export default Course;
```

**Insert**

```bash

    // if (course.get(CourseName)) {
    if (await Course.findOne({ courseName: CourseName })) {
      res.status(400).json({ msg: 'Course already exist' })
    }
    else {
        // course.set(CourseName, { CourseId, CourseType, Description, Price });
        const newCourse = new Course({
          courseName: CourseName,
          courseId: CourseId,
          courseType: CourseType,
          description: Description,
          price: Number(Price)
        });
        await newCourse.save();
        res.status(201).json({ msg: 'Course successfully entered' })

```

**Update**

```bash

    // if (course.get(CourseName)) {
    //   course.set(CourseName, { CourseId, CourseType, Description, Price });
    if (await Course.findOne({ courseName: CourseName })) {
      await Course.updateOne({ courseName: CourseName }, {
        courseId: CourseId,
        courseType: CourseType,
        description: Description,
        price: Number(Price)
      });
      
      res.status(200).json({ msg: "Course details updated succesfully" })

```

**Task**

1. Implement Add to Cart using MongoDB (Mongoose).

2. Implement the CertiApp using MongoDB (Mongoose).
