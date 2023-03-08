const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/OurStudent';
mongoose.connect(mongoURI).then(()=>{
    console.log("Database Connected")
}).catch(error => console.error(error.message));