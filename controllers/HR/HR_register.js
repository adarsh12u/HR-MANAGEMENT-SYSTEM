const model = require("../../models/HR");
const key = require('../../config/key')

// for password hash
const bcryptjs = require("bcryptjs");






const securepassword = async (HR_password) => {
  try {
    const hash_password = await bcryptjs.hash(HR_password, 10);
    return hash_password;
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const securecpassword = async (HR_Confirmpassword) => {
  try {
    const hash_password = await bcryptjs.hash(HR_Confirmpassword, 10);
    return hash_password;
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const register_Hr = async (req, res) => {
const{signup} = req.body
    try {
     if (!(signup.HR_Confirmpassword === signup.HR_password)) 
        {
          throw new Error("password are not same");
        }
    const Secure_password = await securepassword(signup.HR_password);
    const Secure_cpassword = await securecpassword(signup.HR_Confirmpassword);
    const HR_REGISTER_DATA = new model({
      HR_Firstname: signup.HR_Firstname,
      HR_Lastname: signup.HR_Lastname,
      HR_email: signup.HR_email,
      HR_password: Secure_password,
      HR_Confirmpassword: Secure_cpassword,
      mobile: signup.mobile,
     
    });
    
    
  

    const hr_data = await model.findOne({ HR_email: signup.HR_email });
    if (hr_data) 
    
    {
      res.status(200).send({ sucess: false, msg: "this mail is already have" });
    
    }
    
    else
     {
      const Hr_data = await HR_REGISTER_DATA.save();
      res.status(200).send({ sucess: true, data: Hr_data });
     
      
       }
  }
  
  catch (error) 
  
  {
  
    res.status(400).send(`error:${error.message}`);
  
}
};

module.exports = register_Hr;
