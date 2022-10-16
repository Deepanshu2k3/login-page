const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const session = require("express-session");
const{v4:uuidv4} = require("uuid");
const router = require("./router");



const port = process.env.port || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use("/route", router);

app.get('/', (req,res)=> {
    res.render("base", {title: "login system"});
})
app.use(session ({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true

}));











app.listen(port, ()=> {console.log("server is live on hhtp://localhost:3000")});