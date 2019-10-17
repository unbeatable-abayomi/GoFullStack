
// MONOGODB PASSWORD == ouQXHoCgq7dFuCAZ

// MONOGODB CONNECTION   
// mongodb+srv://abayomi:<password>@cluster0-wnkzn.mongodb.net/test?retryWrites=true&w=majority
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Thing = require('./models/thing');

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

  app.post('/api/stuff',(req, res , next)=>{
    // console.log(req.body);
    // res.status(201).json({
    //   message: "Thing created Sucessfull!"
    // });
     const thing = new Thing ({
       title: req.body.title,
       description: req.body.description,
       imageUrl: req.body.imageUrl,
       price: req.body.price,
       userId: req.body.userId
     });

  });

app.use( '/api/stuff',(req, res , next) => {
    const stuff =[ 
        {
        _id: 'frenzy',
        title: 'My First Thing',
        description: 'All the info about my first thing',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Canon_EOS_60D_01.jpg',
        price: 49,
        userId: 'random'
      },
      {
        _id: 'frenzyTwo',
        title: 'My Second Thing',
        description: 'All the info about my second thing',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Canon_EOS_60D_01.jpg',
        price: 249,
        userId: 'randomTwo'
      },
    ];
    res.status(200).json(stuff)
});

module.exports = app;

