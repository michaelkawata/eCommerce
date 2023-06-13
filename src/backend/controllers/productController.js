const Product = require('../models/Product');

// Display list of all Products.
exports.product_list = function (req, res) {
    Product.find({}, function (err, products) {
        if (err) return res.status(500).send(err);
        res.status(200).send(products);
    });
};


// Display detail page for a specific Product.
exports.product_detail = function (req, res) {
    let id = req.params.id;
    Product.findById(id, function (err, product) {
        if (err) return res.status(500).send(err);
        if (!product) return res.status(404).send("No product found.");
        res.status(200).send(product);
    });
};

// Handle Product create on POST.
exports.product_create = function (req, res) {
    Product.create(req.body, function (err, product) {
        if (err) return res.status(500).send(err);
        res.status(200).send(product);
    });
};

// Handle Product delete on DELETE.
exports.product_delete = function (req, res) {
    let id = req.params.id;
    Product.findByIdAndRemove(id, function (err) {
        if (err) return res.status(500).send(err);
        res.status(200).send("Product deleted successfully.");
    });
};

// Handle Product update on PUT.
exports.product_update = function (req, res) {
    let id = req.params.id;
    Product.findByIdAndUpdate(id, req.body, { new: true }, function (err, product) {
        if (err) return res.status(500).send(err);
        if (!product) return res.status(404).send("No product found.");
        res.status(200).send(product);
    });
};
