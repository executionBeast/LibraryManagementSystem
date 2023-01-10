const mongoose = require('mongoose');

const bookBorrowSchema = new mongoose.Schema({
    name:{   //BorrowerName
        type:String,
        required:true
    },

    branch:{
        type:String,
        required:true
    },

    session:{
        type:String,
        required:true
    },
    
    book:{
        type:String,
        required:true,
    },

    book_id:{
        type:String,
        required:true,
    },

    issue_date:{
        type:String,
        required:true
    }
});


const librarydbs = mongoose.model('librarydbs',bookBorrowSchema);   //defined a user data base
exports.module = librarydbs;  //exported user database will be used in controller.js

//Userdb is a class representing blue print of every document
//to be stored in the mongodb database
