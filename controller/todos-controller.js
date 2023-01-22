
const firebase = require('../database/db');
const Todo = require('../models/todo-model');
const Todo2 = require('../models/todo2-model');
const firestore = firebase.firestore();


const addTodo = async (req, res, next) => {
    try {
        const data = req.body;
        console.log("requset body = " + req.body.text);
        //await firestore.collection('todos').doc().set(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const addTodo2 = async (req, res, next) => {
    try {
        const text = "tour1";
        const tourRef = await firestore.collection('tournaments');
        var query = await tourRef.where("text", "==", text).limit(1).get();

        var tour_id ="";
        query.forEach(doc => {
            console.log("requset tournament = " +  doc.id);
            tour_id =  doc.id;
        });
        console.log("requset tournament = " +  tour_id);
        const text2 = "kiki";
        const divRef= await firestore.collection('divisions');
        const query_division = await divRef.where("text", "==", text2).limit(1).get();

        // console.log("requset query_division = " +  query_division[0].id);
        var div_id ="";
        query_division.forEach(doc => {
            console.log("requset division = " +  doc.id);
            div_id =doc.id;
        });
        const data = req.body;
        const todo = new Todo2(
            data.text,
            data.completed,
            tour_id,
            div_id,
            
        );

        const todo22 = {
            text : todo.text  , 
            completed : todo.completed , 
            tournament : todo.tournament , 
            division : todo.division
        };

        
        console.log("requset body = " + todo22.text);
        await firestore.collection('todos2').doc().set(todo22);
                // await firestore.collection('todos2').doc().set({
        //     text : todo.text  , 
        //     completed : todo.completed , 
        //     tournament : todo.tournament , 
        //     division : todo.division}
        //     );

        res.send('created  successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const getAllTodos = async (req, res, next) => {
    try {
        const docRef = await firestore.collection('todos');
        const data = await docRef.limit(2).get();
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
    console.log(" params = " + req.params.id);
    try {
        const id = req.params.id;
        const todo = await firestore.collection('todos').doc(id);
        const data = await todo.get();
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
    console.log(" params = " + req.params.id);
    try {
        const id = req.params.id;
        const data = req.body;
        const todo =  await firestore.collection('todos').doc(id);
        await todo.update(data);
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
    addTodo2,
    getAllTodos,
    getTodo,
    updateTodo,
    deleteTodo
}