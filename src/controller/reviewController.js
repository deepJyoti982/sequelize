const db = require('../models/index');

const reviewModel = db.reviews;


const createReview = async (req, res) => {
    try {
        const reqBody = req.body;
        const review = await reviewModel.create(reqBody)
        if (!review) return res.status(400).send({ status: false, message: "There have some problem while creating review!" })
        return res.status(201).send({ status: true, message: "Review created", data: review })
    } catch (error) {
        console.log(error)
        return res.status(500).send({ status: true, message: error.message })
    }
}

const getAllReviews = async (req, res) => {
    try {
        const allReviews = await reviewModel.findAll()
        if (!allReviews) return res.status(400).send({ status: false, message: "Oops..there is some problem while getting all reviews!" })
        return res.status(200).send({ status: true, message: "All reviews fetched successfully", data: allReviews })
    } catch (error) {
        console.log(error)
        return res.status(500).send({ status: false, message: error.message })
    }
}
module.exports = {
    createReview,
    getAllReviews
}