const mongoose = require("mongoose");
const model = require("../../models/Project");

const create_project = async (req, res) => {
 
  try {
   

    const { Projectdata } = req.body;

   

    const Projectdatas = new model({
        Project_name:  Projectdata.Project_name,
        Project_id:Projectdata.Project_id, 
        Project_description: Projectdata.Project_description,
        Project_date: Projectdata.Project_date,
        Project_completion_date: Projectdata.Project_completion_date,
        Project_country: Projectdata.Project_country,
       Project_manager: Projectdata.Project_manager,
       HR_id:req._id
      
    
     
    });

    if (
      !Projectdata.Project_name ||
      !Projectdata.Project_id ||
      !Projectdata.Project_description ||
      !Projectdata.Project_date ||
      !Projectdata.Project_completion_date ||
      !Projectdata.Project_country ||
      
      !Projectdata.Project_manager
    ) {
      throw new Error("All fields are required");
    }


    
      const data = await Projectdatas.save();
      res.status(200).send({ sucess: true, data: data });
    
  
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
module.exports = create_project;