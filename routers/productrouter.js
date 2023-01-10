const getProductsList = require("../controllers/productcontroller");
const express = require("express");

const router = express();
router.get("/Products", getProductsList.getProductsList);
module.exports = router;
router.get("/product/:id", getProductsList.getProductsDetail);
