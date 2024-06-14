var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define the schema for housing data
var housingSchema = new Schema({
    price: {
        type: Number,
        required: true
    },
    area: {
        type: Number,
        required: true
    },
    bedrooms: {
        type: Number,
        required: true
    },
    bathrooms: {
        type: Number,
        required: true
    },
    stories: {
        type: Number,
        required: true
    },
    mainroad: {
        type: String,
        required: true
    },
    guestroom: {
        type: String,
        required: true
    },
    basement: {
        type: String,
        required: true
    },
    hotwaterheating: {
        type: String,
        required: true
    },
    airconditioning: {
        type: String,
        required: true
    },
    parking: {
        type: Number,
        required: true
    },
    prefarea: {
        type: String,
        required: true
    },
    furnishingstatus: {
        type: String,
        required: true
    }
});

// Export the model
module.exports = mongoose.model('HousePrice', housingSchema);
