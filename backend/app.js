const express = require ('express');  

const app =express();

app.use((_req, _res, next)=>{

    console.log('First middleware');
    next();
});

app.use((_req, res, _next)=>{
    res.send('hellofrom express');
});

module.exports = app;