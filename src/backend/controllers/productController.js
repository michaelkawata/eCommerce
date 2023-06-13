const product = require('express').Router()
const db = require('../../models')
const { Product } = db

// FIND ALL Products
products.get('/', async (req, res) => {
    try {
        const result = []
        const foundProducts = await Product.findAll();
        for (let i = 0; i < foundProducts.length; i++) {
            result.push({
                product: foundProducts[i],
            })
        }       
        res.status(200).json(result)

    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC Products

products.get('/:id', async (req, res) => {
    try {
        const foundProduct = await Product.findOne({
            where: { id: req.params.id },
        })
        res.status(200).json({ product: foundProduct })
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A Products
products.post('/onlymarlonmichaelandchristhegreat', async (req, res) => {
    try {
        console.log(req.body)
        const newProduct = await Product.create(req.body)
        res.status(201).json({
            message: 'Successfully inserted a new Product',
            data: newProduct
        })
    } catch (err) {
        res.status(500).json(err)
    }
})