const express = require('express')
const mongoose = require('mongoose');
const userroutes = require("./routes/user-routes")
const bodyParser = require('body-parser');
const pgdetails = require("./routes/pgdetails-routes")
const app = express()

app.use(express.json());



app.use(bodyParser.json());

app.use('/user', userroutes);
app.use('/pg', pgdetails);


mongoose.connect("mongodb://localhost:27017/pg-finder")
.then(()=>{
    console.log("connected to database!");
    app.listen(3000,() =>{
        console.log('server is running on port 3000');
    });
})
.catch(()=>{
    console.log("connection failed!");
});