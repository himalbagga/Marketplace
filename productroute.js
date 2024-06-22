const express = require('express');
const router = express.Router();
const productController = require('./productcontroller.js');

router.post('/', productController.createProduct);
router.get('/', productController.getAllProducts); 
router.get('/:id', productController.getProductById);
router.put('/:id', productController.updateProductById);
router.delete('/:id', productController.deleteProductById);
router.delete('/', productController.deleteAllProducts);

module.exports = router;

