const mongoose = require('mongoose');

const instructorSchema = new mongoose.Schema({
  instructorName: String,
  lectures:[{courseId:{ type: mongoose.Schema.Types.ObjectId, ref:'Course' }}
  
]  
});

const courseSchema = new mongoose.Schema({
  name: String,
  level: String,
  description: String,
  image: String,
  lectures: [
    {
      date: String,
      instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'Instructor' },

    },
  ],
});

const Instructor = mongoose.model('Instructor', instructorSchema);
const Course = mongoose.model('Course', courseSchema);

module.exports = { Instructor, Course };
