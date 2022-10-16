var express = require('express');
var router = express.Router();

const credential = {
    username: "admin@admin.com",
    pass: "admin@123"
} 
//login user

router.post('/login', (req,res) => {
    if(req.body.email == credential.username && req.body.password == credential.pass){
        res.redirect('/logged.ejs');
    } else {
        res.end("Invalid credentials");
    }
});

// dashboard
router.get("/dashboard", (req, res) => {
    if(req.session.user) {
        res.render('dashboard', {user: req.session.user});

    
    } else {
        res.send("unauthorized user");
    }

}) ;

module.exports = router;