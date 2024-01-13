const mongoose = require('mongoose');
const validates = require('validator')
const key = require('../config/key')

const jwt = require('jsonwebtoken')

const schema = new mongoose.Schema({

 

  HR_Firstname:{

    // type:String,
    // required:true,
    // minlength:3,
    // maxLength:30

    type: String,
    required: true,
    minLength:3,
    maxLength:50,
    trim:true,
    validate(value){
        if(!(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/).test(value))
        {
            throw new error ("Invalid Name");
        }
    }
},

  HR_Lastname:{

    type: String,
    required: true,
    minLength:3,
    maxLength:50,
    trim:true,
    validate(value){
        if(!(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/).test(value))
        {
            throw new error ("Invalid LastName");
        }
    }
},


HR_email:{
   type:String,
   required:true,
   unique:[true,"email already exist"],
   validate(value)
   {
       if(!validates.isEmail(value))
             {
               throw new Error("email is envalid");
             }
   }    
},


HR_password:{

    type:String,
    required:true,
     minLength:3,
    maxLength:300
},
HR_Confirmpassword:{

    type:String,
    required:true,
   
},

mobile:{
    type:Number,
    required:true,
    unique:true,
    min:10,
    
},
verifytoken:{
  type:String,
 
},


tokens:[

   {
      token:{
        type:String,
        // required:true
      }
   }

]




},{timestamps:true})


schema.methods.generateAuthToken =async  function(){
 
     try {

          let token  = jwt.sign({_id:this._id},process.env.SECRETE_KEY,{
            expiresIn:'100d'
          })

       
          this.tokens = this.tokens.concat({token:token})
       await this.save();
           return token
     
        } catch (error) {
        
  
         console.log(error.message);

     }


}


module.exports =   mongoose.model('HR',schema)