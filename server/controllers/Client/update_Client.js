const model = require('../../models/Client');

const update_client = async(req,res) => {

 try
  {
     
        const {id} = req.params;
       
        const data = await model.findByIdAndUpdate({_id : id} ,  req.body)

        
       const final = await data.save();
  
        res.send({updates : final});
 }

 
  catch (error)
  {

     res.status(400).send({error:error.message});
 }
     

}
module.exports = update_client;