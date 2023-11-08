const mongoose = require("mongoose");

const workExperienceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    position:{
        type: Array,
        required: true
    },
    company:{
        type: Array,
        required: true
    },
    location:{
        type: Array,
        required: true
    },
    startDate:{
        type: Array,
        required: true
    },
    endDate:{
        type: Array,
        required: true
    },
    description:{
        type: Array,
        required: true
    }
});

module.exports = mongoose.model("workExperience", workExperienceSchema);