const express = require('express');
require('dotenv').config();
const cors = require("cors");
const mongoose = require('mongoose');
const userRouter = require('./routes/user.route');

const PORT = process.env.PORT
const URI = process.env.MONGODB_URI


const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", userRouter);



mongoose.connect(URI, (err) => {
    err? console.log(err) : console.log("MongoDB Connected Succesfully!!");
});


app.listen(PORT, ()=> {
    console.log(`Express Running at PORT: ${PORT}`);
});;