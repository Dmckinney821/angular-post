const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const mongoose = require('mongoose')
const postsRoutes = require('./routes/posts')

mongoose.connect('mongodb+srv://thedan:FEocm9BWtnLuO8Wb@cluster0-en2uh.mongodb.net/node-angular?retryWrites=true&w=majority')
.then(() => {
    console.log('Connected')
})
.catch(() => {
    console.log('Something is wrong')
})

app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use('/api/posts', postsRoutes)

module.exports = app;
