const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    
   Project_name: {
        type: String,
        required: true,
        trim: true
    },
    Project_id: {
        type: Number,
        required: true,
        trim: true,
    },
    Project_description: {
        type: String,
        required: true,
        trim: true,

    },
    Project_date: {
        type: Date,
        required: true,
    },
    Project_completion_date: {
        type: Date,
        required: true,
    },
    Project_country: {
        type: String,
        required: true,
        trim: true
    },
  
    Project_manager: {
        type: String,
        required: true,
        trim: true
    }
    ,
    HR_id :{
        type: String,
    }
})


const Project = new mongoose.model("Projects", ProjectSchema)

module.exports = Project;





