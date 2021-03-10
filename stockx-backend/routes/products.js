const router = require('express').Router();
const product = require('../models/product.model');
let Product = require('../models/product.model');

// Lists all products..
router.route('/').get((req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Adds a product..
router.route('/add').post((req, res) => {
    const productname = req.body.productname;
    const description = req.body.description;
    const price = Number(req.body.price);
    const brand = req.body.brand;

    const newProduct = new Product({
        productname,
        description,
        price,
        brand,
    });

    newProduct.save()
        .then(() => res.json('New Product Added..'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Retrieves a single product..
router.route('/:id').get((req, res) => {
    Product.findById(req.params.id)
        .then(product => res.json(product))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Deletes a product..
router.route('/:id').delete((req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(() => res.json('Product Deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Updates a product..
router.route('/update/:id').post((req, res) => {
    Product.findById(req.params.id)
        .then(product => {
            product.productname = req.body.productname;
            product.description = req.body.description;
            product.price = Number(req.body.price);
            product.brand = req.body.brand;

            product.save()
                .then(() => res.json('Product Updated..'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;