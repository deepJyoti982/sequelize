const { where } = require('sequelize');
const db = require('../models/index')
const productModel = db.products
const reviewModel = db.reviews

const createProduct = async (req, res) => {
    try {
        const reqBody = req.body;
        const product = await productModel.create(reqBody)
        if (!product) return res.status(503).send({ status: false, message: "There have some problem while creating this product!" })
        return res.status(201).send({ status: true, message: "Product created successfully", data: product })
    } catch (error) {
        console.log(error)
        return res.status(500).send({ status: false, message: error.message })
    }
}


const getAllProducts = async (req, res) => {
    try {
        const allProducts = await productModel.findAll()
        if (!allProducts) return res.status(400).send({ status: false, message: "Oops..there is some problem while getting all products!" })
        return res.status(200).send({ status: true, message: "All products fetched successfully", data: allProducts })
    } catch (error) {
        console.log(error)
        return res.status(500).send({ status: false, message: error.message })
    }
}


const getProductReviews = async (req, res) => {
    try {
        const getData = await productModel.findAll({
            include: [{
                model: reviewModel,
                as: 'review'
            }],
            where: { id: 1 }
        })

        if (!getData) return res.status(400).send({ status: false, message: "There is some problem while making connection with tables!" })
        return res.status(200).send({ status: true, message: "table connection successfull", data: getData })
    } catch (error) {
        console.log(error)
        return res.status(500).send({ status: false, message: error.message })
    }
}

module.exports = {
    createProduct,
    getAllProducts,
    getProductReviews
}