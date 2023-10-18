const {Instructor,Course} = require('../models/adminModels')

const isInstructorAvailable = async (date,instructor) => {
 
    const existingCourse = await Course.findOne({
      "lectures.date": date,
      "lectures.instructor": instructor
    });

  
  
    return existingCourse;
  };


  module.exports = {isInstructorAvailable}