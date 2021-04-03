/* eslint-disable no-unused-vars */
const path = require('path');

const express = require('express');

const admonController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', admonController.getAddProduct);

// /admin/products
router.get('/products', admonController.getProducts);

// /admin/add-product => POST
router.post('/add-product', admonController.postAddProduct);


module.exports = router;
