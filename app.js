const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
const products = require("./route/products")
const users = require("./route/users")
const admin = require("./route/admin") 
const port = 2300


app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors());
app.use('/v1/', products)
app.use('/user/v1', users)
app.use('/admin/v1', admin)
app.use((req, res)=>{
  res.semd("<h1>404 Not found</h1>")
})

app.listen(port, () => {
  console.log('Example app listening on port ' + port)
});