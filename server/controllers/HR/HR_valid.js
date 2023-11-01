const HR  =  require('../../models/HR')
 
const HR_valid = async(req,res) => {
 
    try {
        


        const validahr = await HR.findOne({_id:req._id})
   
      res.status(200).send(validahr)
    } catch (error) {
        res.status(401).send("user not found")
    }

}

module.exports =  HR_valid