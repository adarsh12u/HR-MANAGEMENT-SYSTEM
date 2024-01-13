const mongoose = require("mongoose");
const model = require("../../models/Award");

const create_award = async (req, res) => {
 
  try {
    console.log("1") 

    const { awarddata } = req.body;

   
console.log("1") 
  const awarddatas = new model({
        Award_name: awarddata.Award_name,
        Award_item: awarddata.Award_item,
        Award_description: awarddata.Award_description,
        Award_date: awarddata.Award_date,
        Awarded_by: awarddata.Awarded_by,
        Award_client_name: awarddata.Award_client_name,
    
      Award_client_id: awarddata.Award_client_id,
      HR_id:req._id
     
    });

    if (
      !awarddata.Award_name ||
      !awarddata.Award_item ||
      !awarddata.Award_description ||
      !awarddata.Award_date ||
      !awarddata.Awarded_by ||
      !awarddata.Award_client_name ||
      
      !awarddata.Award_client_id
    ) {
      throw new Error("All fields are required");
    }


    
      const data = await awarddatas.save();
      res.status(200).send({ sucess: true, data: data });
    
  
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
module.exports = create_award;