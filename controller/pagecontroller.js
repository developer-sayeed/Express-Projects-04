const path = require("path");
const { readFileSync } = require("fs");

//  Home Page
const homepage = (req, res) => {
  res.render("index");
};
//  About Page
const aboutpage = (req, res) => {
  res.render("about");
};

//  Blog Page
const blogpage = (req, res) => {
  res.render("blog");
};

//  Shop Page
const shoppage = (req, res) => {
  res.render("shop");
};

//  Shop Single Page
const shopsingle = (req, res) => {
  res.render("shop-single");
};

//  Shop checkout Page
const shopcheckout = (req, res) => {
  res.render("shop-checkout");
};
//  shop-cart Page
const shopcart = (req, res) => {
  res.render("shop-cart");
};

//  Contant  Page
const contantpage = (req, res) => {
  res.render("contact");
};


//  Portfolio  Page
const portfoliopage = (req, res) => {
  res.render("portfolio");
};

//  portfoliosingle  Page
const portfoliosingle = (req, res) => {
  res.render("portfolio-single");
};


//  Service  Page
const servicepage = (req, res) => {
  res.render("service");
};

module.exports = {
  homepage,
  aboutpage,
  blogpage,
  shoppage,
  shopcart,
  shopcheckout,
  shopsingle,
  contantpage,
  portfoliopage,
  portfoliosingle,
  servicepage
};
