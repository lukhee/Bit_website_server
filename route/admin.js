const express = require('express');
const product = require("../data").productData
const db = require("../db")
const router = express.Router();

router.get('/', (req, res)=>{
    res.send("admin home page");
})

router.get('/category', (req, res)=>{
    res.send("admin category page")
})

router.post('/', (req, res)=>{
    let editProduct = req.body;
    console.log(editProduct)
    let changeValue = product.find((x)=>{
        return x.id == editProduct.id
    })
    changeValue.category = editProduct.category 
    changeValue.price = editProduct.price
    res.send({"message": " admin got your post request"})
})

router.delete('/', (req, res) => {
    let deleteProduct = req.body;
    console.log(deleteProduct.id)
    var ind = product.findIndex(function (element) {
        return element.id === deleteProduct.id;
    })
    if (ind !== -1) {
        product.splice(ind, 1)
    }
    console.log(product)
    res.send({ "message": "delete message gotten" })
})

module.exports = router