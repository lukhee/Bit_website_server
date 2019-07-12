
var express = require('express');
var router = express.Router();
const db = require("../db")
const data = require("../data")


var productData = data.productData
// Home page route.
router.get('/', function (req, res) {
  let sql = "select * from products"
  db.query(sql,(err, rows)=>{
    if (err) throw err;
    console.log(typeof (rows)) 
     res.send(rows) 
 })
  // res.send(productData)
})

// About page route.
router.get('/category/:category', function (req, res) {
  let category = req.params.category
  let newData = productData.filter(element => {
    return element.category == category
  })
  res.send(newData);
})

module.exports = router;