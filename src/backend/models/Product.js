const mongoose = require('mongoose');
const { Schema } = mongoose;

// Create a Schema for Products
const ProductSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    des: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    categories: {
        type: Array,
    },
    size: {
        type: Array,
    },
    color: {
        type: Array,
    },
    price: {
        type: Number,
        required: true
    },
},{
    timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
});

module.exports = mongoose.model('Product', ProductSchema);
