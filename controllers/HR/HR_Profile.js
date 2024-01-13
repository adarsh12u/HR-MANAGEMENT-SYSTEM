const model = require('../../models/HR');
const bycrypyjs = require('bcryptjs')

const HR_Profile = async(req,res) =>{

try {
   
    const _id = req._id;

    const data = await model.findById({_id});
     
     
    res.send(data);

} catch (error) {
     res.status(400).send({error:error.message});    
}


}
module.exports = HR_Profile;