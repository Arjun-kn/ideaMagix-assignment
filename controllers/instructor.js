const { Instructor } = require('../models/adminModels');

const instructorController = async(req,res) =>{
    try {
     
        const instructors = await Instructor.find({}).populate({
          path: 'lectures.courseId',
          select:'name level description image',
    
        });
        
    
        res.status(200).json({
            success:true,
            message:"All instruction getting successfull",
            instructors
        });
      } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
      }
}


const newintructorcontroller = async(req,res)=>{
  const { instructorName } = req.body;
 

  try {

    const existingInstructor = await Instructor.findOne({instructorName: { $regex: new RegExp(`^${instructorName}$`, 'i') },});

    if (existingInstructor) {
      return res.status(400).json({ message: 'Instructor with this name already exists' });
    }
    const instructor = new Instructor({ instructorName })
    await instructor.save();
    console.log(instructor)
    res.status(201).json(instructor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {instructorController,newintructorcontroller}

