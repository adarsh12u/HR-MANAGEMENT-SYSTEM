const jwt = require('jsonwebtoken')

const user = require("../models/HR")

const auth = async(req,res,next) =>{

    try{
     
        const token = req.headers.authorization;
       
        const verifytoken = jwt.verify(token , process.env.SECRETE_KEY)
      

        
        const roouser = await user.findOne({_id : verifytoken._id})
        if(!roouser){
          

            throw new Error("user not found")
        }

       req.token = token
      req.roouser = roouser
      req._id = roouser._id
      


        next();
    }
    catch(err){
        res.status(401).send("plese login first you are not authoriZed")
    }
     

}

module.exports = auth