'use strict';

let express = require('express');
let bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static('public'));

app.get('/', function (req,res,next) {
    res.sendFile(__dirname + '/public/index.html')
});

app.listen(3000, function (err) {
    if (err) {
        console.log('NADA DE GARCHAR WACHO. SEGUI INTENTANDO ENTRAR')
    } else {
        console.log('BIEN AHI. ENTRASTE!!!')
    }
})