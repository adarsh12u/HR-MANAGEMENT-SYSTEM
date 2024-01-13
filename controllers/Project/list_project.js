const model = require('../../models/Project');

const list_project = async(req,res) =>{
  
    try {
       
        
        const Projects = await model.find({HR_id : req._id});
    
        res.status(201).send(Projects)
        
          

    } catch (error) {
          
        res.status(400).send({error:error.message});

    }


}

module.exports = list_project;