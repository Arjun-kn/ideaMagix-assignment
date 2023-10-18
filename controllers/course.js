const {Instructor,Course} = require('../models/adminModels')

const {isInstructorAvailable} = require('../helper/courseHelper')


const courseController = async(req,res)=>{
  // console.log(req.body)
    const { name, level, description, image, lectures } = req.body;

    try {
      
      // Check if the instructor is available for the given date
      // for (const lecture of lectures) {
    
       const [lecture] = lectures
        
        let { date, instructor } = lecture; // get the value from lectures
       
        // date = date.split("-").reverse().join("-")
        // date = new Date(date)
        
  
       const isAvailable = await isInstructorAvailable(date,instructor)
       console.log(isAvailable)
  
        if (isAvailable) {
          return res.status(400).json({
            success:false,
            message: `Instructor is already assigned a lecture on ${date}`,
          });
        }


      
      
  
      const course = new Course({ name, level, description, image, lectures });
      console.log(course)

      await course.save();


  
      // Update instructor with lecture dates
      // // for (const lecture of lectures) {
      //    { date, instructor } = lectures;
        await Instructor.findByIdAndUpdate(
          instructor,
          { $addToSet: { lectures: { courseId: course._id} } },
          { new: true }
        );
     
  
      res.status(201).json(course);
    } catch (error) {
        console.log(error)
      res.status(400).json({ message: error.message });
    }

}


module.exports = courseController