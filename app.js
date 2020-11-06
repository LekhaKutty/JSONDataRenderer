'use strict';
const express = require('express');
const app = express();
const path = require('path');

const router = express.Router();

const fs = require('fs');
app.use('/', express.static(path.join(__dirname)));
router.get('/json', (req,res)=>{
    fs.readFile('data.json', (err,data) => {
        if (err) throw err;
        let jsonData = JSON.parse(data);
        console.log(jsonData);
        res.json(jsonData);
        
    });
});



app.use('/',router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');