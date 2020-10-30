const mongoose = require("mongoose")


const nameSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        maxLength: 25
    },
    budget: {
        type: Number,
        required: true,
        
    },
    color: {
        type: String,
        trim: true,
        required: true//,
        
        //validator: [(hexColor) => (/^#[0-9A-F]{6}$/i).test(hexColor), 'Invalid hex color value']
    }
}, { collection: 'budget_list'})

module.exports = mongoose.model('budget_list', nameSchema)