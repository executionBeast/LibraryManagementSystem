const express = require('express')
const route = express.Router()
const renderr = require('../services/render')   //imported RENDER.JS file as services
const controller = require('../controller/controller');

route.get('/', renderr.show_books);  //renderr = render.js  //

route.get('/add_user',renderr.borrow_books);  //enter borrow books 

route.get('/update-user',renderr.update_user);



//api routes 
route.post('/api/borrowedbooks/',controller.create); //working data creation 
route.get('/api/borrowedbook/',controller.find);  //working fetch all users data
route.put('/api/borrowedbook/:id',controller.update);  // '/api/borrowedbook/${id}'  id in borrowed book data
route.delete('/api/borrowedbook/:id',controller.delete);

//ager api route pe delete req aayi to contro.delete fn ko run  karo

exports.module = route //exporting route as module & getting in server.js as app.use('/',require('./ser/routes/routee).module)



/*


exports.homeRoute = (req,res) => {
    res.render('index');
}


exports.add_user = (req,res)=>{  //add user page
    res.render('add_user')
}



exports.update_user = (req,res)=>{
    res.render('update_user')
}

*/