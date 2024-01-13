const model = require('../../models/Award');

const Show_awards = async(req,res) => {

 try
  {
    
        const {id} = req.params;
       
        

        const data = await model.findOne({Award_client_id: id})

    

        res.send(data);
 }

 
  catch (error)
  {

     res.status(400).send({error:error.message});
 }
     

}
module.exports = Show_awards;