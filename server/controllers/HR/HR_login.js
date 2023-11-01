const model = require('../../models/HR');
const bycryptjs = require('bcryptjs')
const key = require('../../config/key')

const jwt = require('jsonwebtoken')



const login_Hr  = async(req,res) =>{
 
const {login}  =req.body;
const email = login.HR_email
const password = login.HR_password
// const email = req.body.HR_email
// const password = req.body.HR_password
try {

    if(!email || !password)
    {
      // alert("plZ fill information")
       throw new Error("invalid submit")
      
    }
    
   const HR_data = await model.findOne({HR_email:email})
   if(!HR_data){
    throw new Error("not registerd")
   }
   if(HR_data){
const passwordMatch =   await bycryptjs.compare(password,HR_data.HR_password)
  if(passwordMatch){
          // create token
          const tokendata =await HR_data.generateAuthToken()
        

         await res.cookie("jwt",tokendata,{

            expires:new Date(Date.now()+2592000000),
            httpOnly : true
          })
 
          // window.localStorage.setItem("loggedIn", true);
          const HR_content = {
  
          
              name : HR_data.HR_Firstname,
              last : HR_data.HR_Lastname,
              email : HR_data.HR_email,
              password :  HR_data.HR_password,
              cpassword : HR_data.HR_Conformpassword,
              mobile : HR_data.mobile,
              type  : HR_data.type,
              token :  tokendata

          } 
          

          

          const response = {
            sucess:true,
            msg:"user detailes",
            data: HR_content
          }
   
          res.status(200).send({response})
  }
 

  else{
   
    throw new Error("error")


  }

   }
   else{

   
     res.status(200).send({sucess:false,Login:"Email are not found"})

   }


} catch (error) {
  
    
 res.status(401).send({code : 400 , Error : "invalid Email or password"});

}

}


const logout_Hr = (req,res)=>{
  
   res.status(200).send("logout successfully")
   res.clearCookier('jwtToken')

}


module.exports = {logout_Hr,login_Hr
}// module.exports  =crete_token