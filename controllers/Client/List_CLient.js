const model = require('../../models/Client');

const list_client = async(req,res) =>{
  
    try {

       
        
        const clients = await model.find({HR_id : req._id});
    
        res.status(201).send(clients)
        
          

    } catch (error) {
          
        res.status(400).send({error:error.message});

    }


}

module.exports = list_client;