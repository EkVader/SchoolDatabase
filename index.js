const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Student = require('/SchoolDatabase/students_models/students_models');
const methodOverride = require('method-override');
    
mongoose.connect('mongodb://localhost:27017/Students', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("CONNECTION OPEN")
})
.catch(err =>{
    console.log("CONNECTION ERROR")
    console.log(err)
})

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');


/* This line enables getting data from POST method */
app.use(express.urlencoded({extended:true}))

/* Enables POST to override/edit data */
app.use(methodOverride('_method'))

/* Making new students and passing data by POST method */
app.get('/students/new', (req, res)=>{
    res.render('students/new')
})
/* Saving data passed by POST */
app.post('/students', async (req, res)=>{
const newStudent = new Student(req.body);
await newStudent.save();
res.redirect(`/students/${newStudent._id}`)
})

/* Making route to editing page */
app.get('/students/:id/edit', async(req, res)=>{
    const {id} = req.params;
    const student = await Student.findById(id);
    res.render('students/edit', {student})
})

/* Saving edited data to DB */
app.put('/students/:id', async(req,res)=>{
    const {id} = req.params;
    const student = await Student.findByIdAndUpdate(id, req.body, {runValidators:true, new:true})
    res.redirect(`/students/${student._id}`);
})

/* Enables Deleting students in details.ejs page */
app.delete('/students/:id', async(req,res)=>{
    const {id} = req.params;
    const DeleteStudent = await Student.findByIdAndDelete(id);
    res.redirect('/students');
})

/* Displaying all students in DB */
app.get('/students', async (req,res)=>{
    const {age} = req.query;
    const{gender} = req.query;
    if(age){
        const students = await Student.find({ age })
        res.render('students/index',{students, age,})
    }else{
        const students = await Student.find({})
        res.render('students/index',{students, age:''} )
    }
   
    
})
/* Displaying all information about selected student by his MongoDB ID */
app.get('/students/:id', async (req, res)=>{
    const {id} = req.params;
    const studentDetails = await Student.findById(id)
    res.render('students/details',{studentDetails})
})

app.listen('8080',()=>{
    console.log("APP IS LISTENING ON PORT 8080")
})