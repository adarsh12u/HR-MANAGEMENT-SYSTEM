const model = require('../../models/Client');

const Show_client = async(req,res) => {

 try
  {
    
        const {id} = req.params;
       
        

        const data = await model.findById({_id: id})

    

        res.send(data);
 }

 
  catch (error)
  {

     res.status(400).send({error:error.message});
 }
     

}
module.exports = Show_client;