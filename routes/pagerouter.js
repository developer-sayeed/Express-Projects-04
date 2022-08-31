const express = require("express");
const path = require("path");
const { homepage, aboutpage, blogpage, shoppage, contantpage, portfoliopage, servicepage, shopsingle, portfoliosingle } = require("../controller/pagecontroller");


// init Router
const router = express.Router();

// Routes
router.get("/",homepage)
router.get("/about",aboutpage)
router.get("/blog",blogpage)
router.get("/shop",shoppage)
router.get("/shop:id",shopsingle)
router.get("/contact",contantpage)
router.get("/portfolio",portfoliopage)
router.get("/portfolio:id",portfoliosingle)
router.get("/service",servicepage)






// Export Router

module.exports = router;
