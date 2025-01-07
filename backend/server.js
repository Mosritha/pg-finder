const express = require('express')
const mongoose = require('mongoose');
const userroutes = require("./routes/user-routes")
const bodyParser = require('body-parser');
const pgdetails = require("./routes/pgdetails-routes")
const ownerdetails = require("./routes/owner-routes")
const userdetails = require("./routes/pguser-routes")
const bookingdetails = require("./routes/booknow-routes")
const path = require("path");
const app = express()
const cors = require("cors");

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cors());



app.use(bodyParser.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")))


app.use('/user', userroutes);
app.use('/pg', pgdetails);
app.use('/owner',ownerdetails);
app.use('/pguser',userdetails);
app.use('/booking',bookingdetails);

mongoose.connect("mongodb://0.0.0.0:27017/pg-finder")
.then(()=>{
    console.log("connected to database!");
    app.listen(3000,() =>{
        console.log('server is running on port 3000');
    });
})
.catch(()=>{
    console.log("connection failed!");
});