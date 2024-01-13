const mongoose = require("mongoose");
const model = require("../../models/Client");

const Client_controller = async (req, res) => {
 
  try {
    //  const client_name  = req.body.client_name
    //  const client_email  = req.body.client_email
    //  const   client_password =  req.body.client_password
    //  const  client_city = req.body.client_city
    //  const  client_state = req.body.client_state
    //  const   client_address = req.body.client_address
    //  const  client_phone = req.body.client_phone
    //  const  client_other_info = req.body.client_consultant_id
    //  const   client_date  = req.body.client_date
    //  const  client_consultant_id =  req.body.client_consultant_id

    const { clientData } = req.body;
  
   

    const ClientDatas = new model({
      client_name: clientData.client_name,
      client_email: clientData.client_email,
      client_Salary: clientData.client_Salary,
      client_city: clientData.client_city,
      client_state: clientData.client_state,
      client_address: clientData.client_address,
      client_phone: clientData.client_phone,
      client_other_info: clientData.client_other_info,
      client_date: clientData.client_date,
      HR_id:req._id
     
    });

    if (
      !clientData.client_name ||
      !clientData.client_email ||
      !clientData.client_Salary ||
      !clientData.client_city ||
      !clientData.client_state ||
      !clientData.client_address ||
      !clientData.client_phone ||
      !clientData.client_other_info ||
      !clientData.client_date 
    ) {
      throw new Error("All fields are required");
    }

    if (clientData.client_address.length < 8) {
      throw new Error(" ADDRESS SHOULD BE GREATER");
    }
   
    

  
    const email = await model.findOne({
      client_email: clientData.client_email,
    });
    const phone = await model.findOne({
      client_phone: clientData.client_phone,
    });

    if (email || phone) {
      throw new Error("THIS USER IS ALRESDY EXIST");
    } else {
     
      const data = await ClientDatas.save();
      res.status(200).send({ sucess: true, data: data });
    }
  
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
module.exports = Client_controller;
