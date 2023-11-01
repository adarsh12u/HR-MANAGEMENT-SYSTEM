const model =  require('../../models/Project')

const delete_project = async (req, res) => {
    try {
     
        const _id = req.params.id;
       
        
       
       
     await model.findByIdAndDelete({ _id })
        res.status(201).send("Delete Successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
}
module.exports = delete_project