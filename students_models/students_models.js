const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    
    id:{
        type: Number,
        required:true
    },
    
    name:{
        type:String,
        required:true
    },
    surname:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required:true
    },
    gender:{
        type: String,
        required:true
    },
    Field_of_study:{
        type: String,
        required:true
    },
    study_degree:{
        type: String,
        required:true
    },
    year_of_study:{
        type: Number,
        required: true
    }
})

const Student = mongoose.model('Student',studentSchema);
module.exports = Student;
