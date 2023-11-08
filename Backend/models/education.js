const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
    title: {
        type: Array,
        required: true
    },
    degree:{
        type: Array,
        required: true
    },
    college:{
        type: Array,
        required: true
    },
    location:{
        type: Array,
        required: true
    },
    graduationDate:{
        type: Array,
        required: true
    }
});

module.exports = mongoose.model("education", educationSchema);