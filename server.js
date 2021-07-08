// NPM Library 

const express = require("express");
const path = require("path");
const handlebars = require('express-handlebars');

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Server Set Uo
const app = express();

const PORT = process.env.PORT || 3000;

//staticly hosting our pages (html)
app.use(express.static('public'));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Calling HTML Pages

//app.get("/", (req,res) => {
//console.log("Page is here");
//res.send('index')
//})

//For Handelbars

app.set('view engine', 'handlebars');

app.engine('handlebars', handlebars({
    layoutsDir: `${__dirname}/views/layouts`,
}));

app.get('/', (req, res) => {
    console.log("Page is here");
    res.render('main', { layout: 'index' });
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Having our website listen
app.listen(PORT, () => {
    console.log("Hello Detroit ")
})