const mongoose = require('mongoose')
const dotenv = require('dotenv');


dotenv.config({path:'config.env'})  //without it to be saved following won't work
const MONGO_URI = process.env.MONGO_URI   //mongodb://localhost:27017/librarydbs

const connectDB = async () => {
try{
    const con = await mongoose.connect(process.env.MONGO_URI)  
    console.log(`MongoDB Connected: ${con.connection.host}`);

}catch(err){
    console.log(err);
    process.exit(1);

}
}

module.exports = connectDB;



/*
   useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false,
        useCreateIndex:true
    not supported
*/