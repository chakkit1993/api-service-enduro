
const firebase = require('../database/db');
const Todo = require('../models/todo-model');
const firestore = firebase.firestore();


const addTodo = async (req, res, next) => {
    try {
        const data = req.body;
        console.log(req.body);
        await firestore.collection('todos').doc().set(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllTodos = async (req, res, next) => {
    try {
        const docRef = await firestore.collection('todos');
        const data = await docRef.get();
        const todos = [];
       
        if(data.empty) {
            res.status(404).send('No Todos record found');
        }else {
            data.forEach(doc => {
                const todo = new Todo(
                    doc.id,
                    doc.data().text,
                    doc.data().completed,
                    
                );

                todos.push(todo);
            });
            res.send(todos);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}



const getTodo = async (req, res, next) => {
    try {
        const id = req.params.id;
        const student = await firestore.collection('todos').doc(id);
        const data = await student.get();
        if(!data.exists) {
            res.status(404).send('Todo with the given ID not found');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateTodo = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const student =  await firestore.collection('Todos').doc(id);
        await student.update(data);
        res.send('Todo record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteTodo = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('todos').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addTodo,
    getAllTodos,
    getTodo,
    updateTodo,
    deleteTodo
}