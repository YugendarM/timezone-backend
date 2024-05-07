const mongoose = require("mongoose")

const timezoneSchema = new mongoose.Schema({
    timezone: {
        type: String,
        required: true
    },
    startDate: {
        type: String, 
        required: true
    },
    endDate: {
        type: String,
        required: true
    }
},
{
    collection: "timezone",
    timestamps: true
})

module.exports = mongoose.model("timezone", timezoneSchema)