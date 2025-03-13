const express = require("express");
// import your mongoose
const mongoose = require("mongoose")
// install your mongoose

const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// create a studentSchema with name, grade, advisory, and fav subject
const studentSchema = new mongoose.Schema({
name:{ type: String, require: true},
grade: { type: Number, default: 9},
advisory: {type: String, require: true},
favSubject: {type: String, require: true}
})
// connect your schema to a model called Student
const Student = mongoose.model("Student", studentSchema, "Students");
// create a route hanlder for /g12 that returns every student in grade 12

app.get("/g12", async (req, res) => {
  const students = await Student.find({ })
  res.json(students)
})

// (OYO) create a route hanlder for /me that returns yourself without using your name in the query
app.get("/me", async (req, res) =>{
  const me = await Student.findOne({_id : "67d1b45b5a63c3cb1bfc4e09"})
  res.json(me)
})


app.get("/classmate", async (req, res) =>{
  const classmate = await Student.find({name:"AK:"})
  res.json(classmate)
})



// (OYO) create a route hanlder for /friend that returns someone at your table using their name in the query

app.post("/student/save" , async (req, res) => {
  const student = await new Student({
  name: req.body.name,
  grade: req.body.grade,
  favSubject: req.body.favSubject
  }).save()
  res.json(student)
})

// Write an async function called startServer
// inside make sure to connect to mongoose w/ your SRV string
// (make sure your call you name your database myClass!)
// Save a document to mongoDB about yourself 
// (OYO) save 2 more documents about students at your table
// make sure to start your server 

async function startServer() {
  await mongoose.connect("mongodb+srv://CSH:CSH2025@cluster0.6uo1d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  // const me = await new Student({
  //   name: "Miriam:",
  //   grade: 12,
  // }).save()


  
  
  // call startServer
  app.listen(3000, () => {
    console.log ("server is running")
  })
};

startServer()
// if you finished all the excersizes try these 
