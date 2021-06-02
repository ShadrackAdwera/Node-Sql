const express = require('express');

const sequelize = require('./db/db');

const Feed = require('./models/feed-model');

const feedRoutes = require('./routes/feed-routes');

const app = express();

app.use(express.json());


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader(
      'Access-Control-Allow-Methods',
      'PUT, PATCH, POST, DELETE, GET'
    );
    next();
  });

app.use('/posts', feedRoutes);

sequelize.sync().then(result=>{
  //console.log(result)
  app.listen(5000);
}).catch(error=>console.log(error));
