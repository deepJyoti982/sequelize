const router = require('express').Router();
const { createProduct, getAllProducts, getProductReviews } = require('../controller/productController');
const { createReview } = require('../controller/reviewController');


router.post('/api/create-product', createProduct)
router.get('/api/get-all-products', getAllProducts)
router.get('/api/joining-tables', getProductReviews)
router.post('/api/create-review', createReview)

module.exports = router