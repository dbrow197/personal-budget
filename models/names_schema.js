const mongoose = require("mongoose")


const nameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, 
        unique: true
    }, 
    budget: {
        type: Number,
        required: true
       
    }
}, { collection: 'budget_list'})

module.exports = mongoose.model('budget_list', nameSchema)