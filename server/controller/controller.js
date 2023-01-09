var Userdb = require('../model/model').module;

exports.create = (req,res)=>{                       //working
    if(!req.body){
        res.status(400).send({message:"Content body can't be empty!"})
        return;
    }//agr empty hua to return; ho jaayega then execution of create khatam
    //we got data then
    const user = new Userdb({ 
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    })
    //now save it catch error send response
    user
        .save(user)
        .then(data=>{
            // res.send(data)
            res.redirect('/add_user')
        })  //if this promise return error then catch
        .catch(err=>{
            res.status(500).send({errmessage:err.message||"Some Error Occurred!"})
        })



}

exports.find = (req,res)=>{                   //working
    if(!req.body){
        res.status(400).send({
            message:"Error Finding user with ID!"
        });
        return;
        }
    const id=req.query.id
    if(!id){
        Userdb.find()  
            .then(data=>{
                res.send(data)
            })
            .catch(err =>{
                res.status(500).send({errmessage:"Some Error occurred"})
            })
    }else{
        Userdb.findById(id)
            .then(data=>{
                res.send(data)
            })
            .catch(err=>{
                res.status(500).send({errmessage:err||"Some Error occurred finding!"})
            })
    }

}

exports.update = (req,res)=>{                              //working
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

exports.delete = (req,res)=>{                              //working
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
