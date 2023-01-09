const axios = require("axios");
const { response } = require("express");



exports.show_books = (req,res) => {
    axios.get('http://localhost:8000/api/users')
    .then(response=>{
        res.render('index',{users:response.data});
    })
    .catch(err=>{
        res.send(err);
    })

}


exports.borrow_books = (req,res)=>{  //add user working,using form POST method at '/api/users'
    res.render('add_user')   //add user page
}   


exports.update_user = (req,res)=>{
    axios.get('http://localhost:8000/api/users',{params:{id:req.query.id}})  //params provided to get that one user kaa data
        .then(userdata=>{     //userdata is a response promise returned by axios.get
            res.render('update_user',{data:userdata.data}) //data -> that one user ka data
        })
        
    
}


 