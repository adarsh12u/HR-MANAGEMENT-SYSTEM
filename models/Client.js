const mongoose = require("mongoose");
const validates   = require('validator')
const ClientSchema = new mongoose.Schema({
    client_name:{
        type:String,
        required:true,
        minLength:3,
        maxLength:20,
        trim:true,
      
    },
    client_email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        validate(value)
   {
       if(!validates.isEmail(value))
             {
               throw new Error("email is invalid");
             }
   }    
     
    },
    client_Salary:{
        type:Number,
        required:true,
        

    },
    client_city:{
        type:String,
        required:true,
        minLength:3,
        maxLength:20,
        trim:true
    },
    client_state:{
        type:String,
        required:true,
      
        minLength:2,
        trim:true
    },
    client_address:{
        type:String,
        required:true,
       
        minLength:8,
        trim:true
    },
    client_phone:{
        type:String,
        required:true,
        unique:true,
       
        minLength:10,
        maxLength:10,
        trim:true
    },
    client_other_info:{
        type:String,
        required:true,
        trim:true
    },
    client_date:{
        type:Date,
       
    },
    HR_id :{
        type: String,
    }
  
})



module.exports =  mongoose.model("clients",ClientSchema)














