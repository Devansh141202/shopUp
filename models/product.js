const mongoose = require('mongoose');

const product = new mongoose.Schema({
    productName: {
        type: String,
    },
    price: {
        type: String,
    },
    modelNo: {
        type: String,
        // required: true,
    },
    material: {
        type: String,
    },
    quantityInBox: {
        type: String,
    },
    discription: {
        type: String,
    },
    image: {
        type: String,
    },
});
module.exports = mongoose.model('Product', product);