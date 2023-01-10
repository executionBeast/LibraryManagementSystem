const axios = require("axios");
const { response } = require("express");



exports.show_books = (req,res) => {
    axios.get('http://localhost:8000/api/get-issued-books')
    .then(response=>{
        res.render('index',{bookdatas:response.data});
    })
    .catch(err=>{
        res.send(err);
    })

}


exports.issue_new_books = (req,res)=>{  //add user working,using form POST method at '/api/users'
    res.render('issue_book')   //issue books page
}   


exports.update_books = (req,res)=>{
    axios.get('http://localhost:8000/api/users',{params:{id:req.query.id}})  //params provided to get that one user kaa data
        .then(userdata=>{     //userdata is a response promise returned by axios.get
            res.render('update_user',{data:userdata.data}) //data -> that one user ka data
        })
        
    
}


 