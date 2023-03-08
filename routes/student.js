const express = require('express');
const router = express.Router();
const StudentModel = require('../db/models/students');

//Create student data
router.post('/students', async (req,res)=>{
    const student = new StudentModel(req.body);
    try{
        const createUser = await student.save();
        res.status(201).send(createUser);
    }catch(err){
        res.status(201).send(err.message || err);
    }
});

// read single student data
router.get('/students/:id', async (req, res)=>{
    try{
        const _id = req.params.id;
        const students = await StudentModel.findById(_id);
        if(!students){
            return res.status(404).send("No such student");
        }else{
            res.status(200).send(students);
        }
    }catch(err){
        console.log("There is an error", err);
    }
});

// read all student data
router.get('/students', async (req, res)=>{
    try{
        const students = await StudentModel.find();
        res.status(200).send(students);
    }catch(err){
        console.log("There is an error", err);
    }
});

// update student data
router.patch('/students/:id', async (req, res)=>{
    try{
        const _id = req.params.id;
        const students = await StudentModel.findByIdAndUpdate(_id,req.body,{
            new: true,
        })
        if(!students){
            return res.status(404).send("No such student");
        }else{
            res.status(200).send(students);
        }
    }catch(err){
        console.log("There is an error", err);
    }
});


//delete student data 
router.delete('/students/:id', async (req,res)=>{
    try{
        const deleteStudent = await StudentModel.findByIdAndDelete(req.params.id);
        if(!deleteStudent){
            res.status(400).send("No such student");
        }else{
            res.status(200).send(deleteStudent);
        }
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }
});


// app.post('/students',(req,res)=>{
//     const student = new StudentModel(req.body);

//     //We handle it using promises
//     student.save().then(() => res.send(student))
//     .catch(err => res.status(201).send(err.message || err));
// })


module.exports = router