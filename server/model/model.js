const mongoose = require('mongoose');

const bookBorrowSchema = new mongoose.Schema({
    name:{   //BorrowerName
        type:String,
        required:true
    },

    Branch:{
        type:String,
        required:true
    },

    Session:{
        type:String,
        required:true
    },
    
    BookName:{
        type:String,
        required:true,
    },

    BookID:{
        type:String,
        required:true,
    },

    IssueDate:{
        type:String,
        required:true
    }
});


const librarydbs = mongoose.model('librarydbs',bookBorrowSchema);   //defined a user data base
exports.module = librarydbs;  //exported user database will be used in controller.js

//Userdb is a class representing blue print of every document
//to be stored in the mongodb database
