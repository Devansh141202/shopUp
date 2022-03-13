const Product = require("../models/product");

exports.createProduct = (req, res) => {
    const { productName, price, modelNo, material, quantityInBox, discription, image} = req.body;
    const product = Product({
        productName,
        price,
        modelNo,
        material,
        quantityInBox,
        discription,
        image
    });
    product.save();
    res.json(product);
}