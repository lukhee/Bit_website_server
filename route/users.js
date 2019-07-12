const express = require('express')
const router = express.Router()
const db = require("../db")
const data = require("../data")

let userData = data.user

//  User login
router.get('/', (req, res) => {
    res.send("nothing from user yet")
})

router.post('/login', function (req, res) {
    let id = 2;
    let userName = req.body.userName
    let password = req.body.password
    var sql = "SELECT * FROM users WHERE username = ?";
    db.query(sql, userName, (err, rows) => {
        if (err) {
            console.log("syntax error ")
            throw err;
        } else {
            let user = rows[0]
            if (user.password == password) {
                return res.send({ name: user.username, result: true })
            } else {
                res.json({ message: "Name or Password not found, please again", result: false })
            }
        }
    })
    // let result = data.user.find(element => {
    //     return (element.name == req.body.userName && element.password == req.body.password)
    // })
    // if(result){
    //    return res.send({name:result.name, result: true})
    // } else {
    //     res.json({message: "Name or Password not found, please again", result: false})
    // }
  })

router.get('/logout', (req, res)=>{
    res.send("Logout page here")
})

module.exports = router;