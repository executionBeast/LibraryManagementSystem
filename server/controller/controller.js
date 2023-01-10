var librarydbs = require('../model/model').module;

exports.create = (req,res)=>{                    
    if(!req.body){          //form data of issuing books
        res.status(400).send({message:"Content body can't be empty!"})
        return;
    }
    // console.log(req.body.name)
    // console.log(req.body.branch)
    // console.log(req.body.session)
    // console.log(req.body.book)
    // console.log(req.body.book_id)
    // console.log(req.body.issue_date)
    //agr empty hua to return; ho jaayega then execution of create khatam
    //we got data then
    const issueData = new librarydbs({     //instance of libraryds class 
        name:req.body.name,
        branch:req.body.branch,
        session:req.body.session,
        book:req.body.book,
        book_id:req.body.book_id,
        issue_date:req.body.issue_date

    });
    //now save it catch error send response
    issueData
        .save()     //session.inTransaction is not a function-> this error was caused because I was saving issueData and
                    //.save(issueData)  passing in issueData that is not a ClientSession as a session into some operation(.save())
        .then(data=>{
            res.send(data)
            // res.redirect('/add_user')
        })  //if this promise return error then catch
        .catch(err=>{
            res.status(500).send({errmessage:err.message||"Some Error Occurred!"})
        })



}

exports.find = (req,res)=>{                  //working
    if(!req.body){
        res.status(400).send({
            message:"Error Finding user with ID!"
        });
        return;
        }
    const id=req.query.id
    if(!id){
        librarydbs.find()  
            .then(data=>{
                res.send(data)
            })
            .catch(err =>{
                res.status(500).send({errmessage:"Some Error occurred"})
            })
    }else{
        librarydbs.findById(id)
            .then(data=>{
                res.send(data)
            })
            .catch(err=>{
                res.status(500).send({errmessage:err||"Some Error occurred finding!"})
            })
    }

}

exports.update = (req,res)=>{                             
    if(!req.body){
        res.status(400).send({
            message:"Wrong Input"
        });
        return;
        }
    
    const id = req.params.id;  //from url 'api/users/:id'
    Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:true,new:true})
        .then(data=>{
            // console.log(req.body)
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({errmessage:err || "Some Error occurred updating!"})
        })
}

exports.delete = (req,res)=>{                          
    if(!req.body){
        res.status(400).send({
            message:"Wrong Input"
        })
        return;
    }

    const id = req.params.id;
    Userdb.findByIdAndDelete(id)
        .then(data=>{
            res.send({deleteMessage:`User ${data.name} deleted successfully`});
        })

        .catch(err=>{
            res.status(400).send({errmessage:err || "Some Error occurred deleting!"})
        })
}
