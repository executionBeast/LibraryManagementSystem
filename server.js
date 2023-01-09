const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser")
const path = require("path")
// const route = require('./server/routes/router')
const app = express();
const connectDB = require('./server/database/connection')

//morgan console request
app.use(morgan('tiny'));

connectDB();   //connect to mongodb database

//serialise body parser (parse request to bodyparser)
app.use(bodyparser.urlencoded({extended:true}));

//set view engine
app.set("view engine","ejs");
// console.log(path.resolve(__dirname,"views/ejs")) /home/sujit/Documents/MERNSTACK/crudweb/views/ejs
// app.use("/include",express.static(path.resolve(__dirname,"views/include")))

//load assets
app.use("/css",express.static(path.resolve(__dirname,"assets/css")))  //will be accessed as css/style.css
app.use("/js",express.static(path.resolve(__dirname,"assets/js")))   // js/fecthData.js
app.use("/img",express.static(path.resolve(__dirname,"assets/img")))   //img/favicon.io


dotenv.config({path:'config.env'})
const PORT  = process.env.PORT || 3000

//using router
// console.log(app);    

// app.get('/', (req,res) => {
//     res.render('index');
// });

// app.get('/add_user',(req,res)=>{  //add user page
//     res.render('add_user')
// });

// app.get('/update-user',(req,res)=>{
//     res.render('update_user')
// });
// console.log(process.env.MONGO_URI);

// 1.Now take data from in add user page using body parser and then send it in on list-data page as json
// app.post('/list-data',(req,res)=>{
//     res.send(req.body.name)
//     console.log(req.body.name);

// })

app.use('/',require('./server/routes/router').module);  //using routers exported as module

app.listen(PORT,()=>{
    console.log(`I am on.....http://localhost:${PORT}`);
})