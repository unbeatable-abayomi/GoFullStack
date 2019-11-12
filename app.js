
// MONOGODB PASSWORD == ouQXHoCgq7dFuCAZ

// MONOGODB CONNECTION   
// mongodb+srv://abayomi:<password>@cluster0-wnkzn.mongodb.net/test?retryWrites=true&w=majority
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const stuffRoutes = require('./routes/stuff');
// const Thing = require('./models/thing');

const app = express();
mongoose.connect('mongodb+srv://abayomi:ouQXHoCgq7dFuCAZ@cluster0-wnkzn.mongodb.net/test?retryWrites=true&w=majority')
.then(()=>{
console.log('Sucessfull Connected to MongoDB Atlas');
})
.catch((error)=>{
  console.log('Unable to Connect To Monogo Atalas')
  console.error(error)
})



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use(bodyParser.json())

 app.use('/api/stuff', stuffRoutes)
module.exports = app;

