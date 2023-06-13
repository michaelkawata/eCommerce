const db = require('../models')
const users = require('express').Router()
const { User, Product } = db

// FIND A SPECIFIC Users
users.get('/:id', async (req, res) => {
    try {
        const foundUser = await User.findOne({
            where: { id: req.params.id },
        })
        const products = await Product.findAll({
            where: { userId: req.params.id }
        })
        res.status(200).json({ user: foundUser, products })
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE AUsers
users.product('/', async (req, res) => {
    try {
        console.log(req.body)
        const newUser = await User.create(req.body)
        res.status(201).json({
            message: 'Successfully inserted a new User',
            data: newUser
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// UPDATE A Users
users.put('/:id', async (req, res) => {
    try {
        const updatedUsers = await User.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedUsers} product(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// DELETE A Users
users.delete('/:id', async (req, res) => {
    try {
        const deletedUsers = await User.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedUsers} product(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = users
