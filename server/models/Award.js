const mongoose = require("mongoose");

const AwardSchema = new mongoose.Schema({
    Award_name: {
        type: String,
        required: true,
        trim: true
    },
    Award_item: {
        type: String,
        required: true,
        trim: true,
    },
    Award_description: {
        type: String,
        required: true,
        trim: true,

    },
    Award_date: {
        type: Date,
        required: true,
    },
    Awarded_by: {
        type: String,
        required: true,
    },
    Award_client_name: {
        type: String,
        required: true,
        trim: true
    },
  
    Award_client_id: {
        type: Number,
        required: true,
        trim: true
    },
    HR_id :{
        type: String,
    }
})


const Award = new mongoose.model("Awards", AwardSchema)

module.exports = Award;





