

const express = require('express');
const bodyParser = require('body-parser') 

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.post('/api/stuff',(req, res , next)=>{

  })

app.use( '/api/stuff',(req, res , next) => {
    const stuff =[ 
        {
        _id: 'frenzy',
        title: 'My First Thing',
        description: 'All the info about my first thing',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Canon_EOS_60D_01.jpg',
        price: 4900,
        userId: 'random'
      },
      {
        _id: 'frenzyTwo',
        title: 'My Second Thing',
        description: 'All the info about my second thing',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Canon_EOS_60D_01.jpg',
        price: 24900,
        userId: 'randomTwo'
      },
    ];
    res.status(200).json(stuff)
});

module.exports = app;

