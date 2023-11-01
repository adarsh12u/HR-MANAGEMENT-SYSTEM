const model = require('../../models/Award');

const list_award = async(req,res) =>{
  
    try {

       
        
        const Awards = await model.find({HR_id : req._id});
    
        res.status(201).send(Awards)
        
          

    } catch (error) {
          
        res.status(400).send({error:error.message});

    }


}

module.exports = list_award;