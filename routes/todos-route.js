
const firebase = require('../database/db');
const firestore = firebase.firestore();
const express = require("express");
const { getAllTodos, addTodo, updateTodo, deleteTodo, getTodo ,addTodo2 } = require('../controller/todos-controller');
const router = express.Router();






  // router.post("/todos", (req, res) => {
  //   const employee_id = req.body.employee_id;
  //   const name = req.body.name;
  //   const lastname = req.body.lastname;
  //   const age = req.body.age;

  //   //console.log(req.body);
  //  // res.send(req.body);
  
 
  // });



router.get('/todos', getAllTodos);
router.post('/todo', addTodo);
router.post('/todo2', addTodo2);
router.get('/todo/:id', getTodo);
router.put('/todo/:id', updateTodo);
router.delete('/todo/:id', deleteTodo);


  // router.get("/todos/:id", (req, res) => {
  //   //res.send(req.params.employee_id);
 
    
  // });

  // router.put("/users/update/:id", (req, res) => {
  //   const employee_id = req.body.employee_id;
  //   const name = req.body.name;
  //   const lastname = req.body.lastname;
  //   const age = req.body.age;
  //   //console.log(req.body);
  //   //res.send(req.body);

   
  // });

  // router.delete("/user/delete/:id", (req, res) => {
  //   const id = req.params.employee_id;
  //   // console.log(req.params);
   
  // });



  
module.exports = router;