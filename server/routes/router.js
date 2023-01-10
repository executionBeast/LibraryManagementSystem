const express = require('express')
const route = express.Router()
const renderr = require('../services/render')   //imported RENDER.JS file as services
const controller = require('../controller/controller');

route.get('/', renderr.show_books);  //renderr = render.js  //

route.get('/issue-new-books',renderr.issue_new_books);  //enter borrow books 

route.get('/update-books',renderr.update_books);



//api routes 
route.post('/api/issue-books/',controller.create);
route.get('/api/get-issued-books/',controller.find);  //WORKING fetch all users data
route.put('/api/update-issued-books/:id',controller.update);  // '/api/borrowedbook/${id}'  id in borrowed book data
route.delete('/api/delete-issued-books/:id',controller.delete);

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