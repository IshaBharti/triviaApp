var express = require('express');

var router = express.Router();
const knex = require('../database/database')
const bodyParser =require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
// const express = require('express');
router.use(bodyParser.urlencoded({ extended: true }));
// for routing
router.get('/user', (req, res, next) => {
        res.render("user")
    },

    // for post 
    router.post('/addUser',urlencodedParser, (req, res) => {
        console.log("data =>",req.body)
        var data_storing = {
            "Name": req.body.name,
            "Email": req.body.email,
            "Password": req.body.password,

            "Phone": req.body.phone,
            "Date": req.body.date
        }
        console.log(data_storing)
knex.select('*').from("details").where({"Name":req.body.name}).then((data) => {
    if (data.length<1){
        knex('details').insert(data_storing).then((data)=>{
            console.log("your data has been inserted succesful")


            res.send("<h1>data is inserted")
        }

        ).catch((err)=>{
            console.log({"err":err.message})
        })
    
}else{
    console.log("user exist");
    
}
    })}
    )),  
    router.get('/his', (req, res) => {
        knex.select('*').from("details").then((data) => {
            res.render("his",{data:data})
        }).catch((err) => {
            res.send(err.message)
        })
    }),

module.exports = router;