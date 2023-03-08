const mongoose = require('mongoose');
const validator = require('validator');

const studentsSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        minlenght: 3,
    },
    email : {
        type: String,
        required: true,
        unique: [true, "Email id alrady presend"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email id is invalid")
            }
        }        
    },
    phone: {
        type: String,
    },
    address: {
        type: String,
        required : true,
    }
});

const StudentModel = new mongoose.model('all-students', studentsSchema);
module.exports = StudentModel