require('./db/conn')
const express = require('express');
const studentRouter = require('./routes/student')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({type: '*/*'}));
app.use(studentRouter);

app.listen(PORT,()=>{
    console.log('Server listening on port %s', PORT);
});