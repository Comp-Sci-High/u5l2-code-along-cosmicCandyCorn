const express = require("express");
// import your mongoose

// install your mongoose

const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// create a studentSchema with name, grade, advisory, and fav subject

// connect your schema to a model called Student

// create a route hanlder for /g12 that returns every student in grade 12

// (OYO) create a route hanlder for /me that returns yourself without using your name in the query

// (OYO) create a route hanlder for /friend that returns someone at your table using their name in the query

// Write an async function called startServer
// inside make sure to connect to mongoose w/ your SRV string
// (make sure your call you name your database myClass!)
// Save a document to mongoDB about yourself 
// (OYO) save 2 more documents about students at your table
// make sure to start your server 


// call startServer

// if you finished all the excersizes try these 
