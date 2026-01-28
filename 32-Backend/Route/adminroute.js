import { Router } from "express"

const admin = Router()
const course = new Map()
const carts = new Map();

admin.post('/addCourse',(req,res)=>{
 try{
    const {CourseName,CourseId,CourseType,Description,Price}= req.body;
    if(course.get(CourseName)){
        res.status(400).json({msg:'Course already exist'})
    }
    else{
    try{
    course.set(CourseName,{CourseId,CourseType,Description,Price});
    res.status(201).json({msg:'Course successfully entered'})
    }

    catch{
        res.status(400).json({msg:'Something went wrong while setting data'})
    }
}
}
  catch{
    res.status(500).json({msg:'Something went wrong'})
  }

})
admin.put('/updateCourse',(req,res)=>{
  try{
    const {CourseName,CourseId,CourseType,Description,Price}= req.body;
    if(course.get(CourseName)){
      course.set(CourseName,{CourseId,CourseType,Description,Price});
      res.status(200).json({msg:"Course details updated succesfully"})
    }
    else{
      res.status(404).json({msg:"Course not found"})
    }
  }
  catch{
    res.status(500).json({msg:'Something gone wrong'})
  }
})

admin.patch('/updateCourse1',(req,res)=>{
try{
  const {CourseName,Price} = req.body;
  const result = course.get(CourseName);
  console.log(result);
  if(result){
    course.set(CourseName,{CourseId:result.CourseId,CourseType:result.CourseType,Description:result.Description,Price})
    res.status(200).json({msg:"Course Updated"})
  }
  else{
    res.status(404).json({msg:"Course doesnt exist"})
  }
}
catch{
  res.status(500).json({msg:"Something went wrong"})
}
})

admin.delete('/deleteCourse',(req,res)=>{
try{
  const {CourseName} = req.body;
  if(course.get(CourseName)){
    course.delete(CourseName)
    res.status(200).json({msg:'Course deleted succesfully'})
  }
  else{
    res.status(404).json({msg:'Course not found'})
  }
}
catch{
  res.status(500).json({msg:'Something went wrong'})
}
})

admin.post("/add-to-cart", (req, res) => {
  try {
    const { CourseName, price } = req.body;
    const UserName=req.name

    if (!CourseName|| !price || !UserName) {
      return res.status(400).json({ msg: "coursename and price are required" });
    }

    // If user cart does not exist, create it
    if (!carts.has(UserName)) {
      carts.set(UserName, new Map());
    }

    const userCart = carts.get(UserName);

    // If item already exists, increase quantity
    if (userCart.has(CourseName)) {
      const item = userCart.get(CourseName);
      item.quantity += 1;
      userCart.set(CourseName, item);
    } else {
      userCart.set(CourseName, { CourseName, price, quantity: 1 });
    }

    res.status(200).json({
      msg: "Item added to cart", cart: Object.fromEntries(userCart)
    });

      
      // cart: Array.from(userCart.values())
  
  } catch (error) {
    res.status(500).json({ msg: "Something went wrong" });
  }
});
export {course,admin};