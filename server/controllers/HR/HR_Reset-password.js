const bcryptjs = require('bcryptjs');
const  model = require('../../models/HR')
const jwt = require('jsonwebtoken')


const Reset_password_HR = async(req,res)=>{
    const securecpassword = async(e) =>{

   
        const password  =await bcryptjs.hash(e , 10)
        return password
    }
try {

    const{ id, token} = req.params
    const verifytokens = jwt.verify(token , process.env.SECRETE_KEY)
    
 
 
    const data = req.body;
    
    const password = data.foret_password.password
    
    const cpassword = data.foret_password.cpassword
    
    

    const validUser =await model.findOne({_id:id }  )

    if(validUser.verifytoken !== token){
        console.log("error")
    }
 


    
 

    if(validUser && verifytokens._id) { 
          
  

        if(password !== cpassword){
            
            throw new Error("password not match")
  
       }
       
       const Secure_password =await securecpassword(password);
       const Secure_Cpassword =await securecpassword(cpassword);
      
  
       const HR_data = await model.findByIdAndUpdate({_id:id } , {HR_password : Secure_password , HR_Confirmpassword : Secure_Cpassword})
  
      await  HR_data.save();
 
     


    }
   

    





    
} catch (error) {
   
    res.status(400).send({Error : "This is one Time reset password link you cannot reset your password using this link "});
      
}

     

}

module.exports  = Reset_password_HR