const mongoose = require('mongoose');
const Student = require('/SchoolDatabase/students_models/students_models');

mongoose.connect('mongodb://localhost:27017/Students', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("CONNECTION OPEN")
})
.catch(err =>{
    console.log("CONNECTION ERROR")
    console.log(err)
})

/* const s = new Student({
    id: 69,
    name: 'Tomek',
    surname: 'Kowalski',
    gender: 'male',
    Field_of_study: 'Economics',
    study_degree: 'Master'
})
s.save().then(s =>{
    console.log(s)
})
.catch(e =>{
    console.log(e)
}) */

const seedStudents= [
    {
        id: 1,
        name: 'Kasia',
        surname: 'Olczas',
        gender: 'female',
        Field_of_study: 'Informative Technology',
        study_degree: 'associate'
    },
    {
        id: 2,
        name: 'Ola',
        surname: 'Bińska',
        gender: 'female',
        Field_of_study: 'Informative Technology',
        study_degree: 'associate'
    },
    {
        id: 3,
        name: 'Bartosz',
        surname: 'Kępa',
        gender: 'male',
        Field_of_study: 'Informative Technology',
        study_degree: 'Bachelor'
    },
    {
        id: 1,
        name: 'Elżbieta',
        surname: 'Kat',
        gender: 'female',
        Field_of_study: 'Informative Technology',
        study_degree: 'associate'
    }
]
Student.insertMany(seedStudents)
.then(res =>{
    console.log(res)
})
.catch(e =>{
    console.log(e)
})