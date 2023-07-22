require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');


const app = express();

const PORT = process.env.PORT;
const mongoURL = process.env.MONGO_URL;

app.use(express.json());
app.use(express.urlencoded({extended:true}))

/////////////////////////////////////////// Routes ///////////////////////////
app.use('/api',productRoutes);


app.get("/", (req,res) => {
    res.send("hi movies")
})



mongoose.connect(mongoURL)
.then(()=> {
app.listen(PORT,console.log("server is running "))

    console.log('connected to mongodb')
}).catch((err) => {
    console.log(err)
});
