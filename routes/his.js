var express = require('express');
let router = express.Router();



/* GET home page. */
router.get('/his', function(req, res, next) {
    res.render('his')
});
router.post('/his', (req, res) => {
    knex.select('*').from("details").then((data) => {
        res.render("his",{data:data})
    }).catch((err) => {
        res.send(err.message)
    })


    // var a=fs.readFileSync('Book_details.json')
    // let bb=JSON.parse(a)
    // console.log(bb);  
})



 




module.exports = router;