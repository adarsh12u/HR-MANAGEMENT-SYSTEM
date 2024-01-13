const model = require('../../models/Project');

const show_project = async(req,res) => {

 try
  {
    
        const {id} = req.params;
       
        

        const data = await model.findOne({ Project_id: id})

    

        res.send(data);
 }

 
  catch (error)
  {

     res.status(400).send({error:error.message});
 }
     

}
module.exports = show_project;