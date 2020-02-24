const express = require('express');
const xss = require('xss-clean');
const mongoSanitize  = require('express-mongo-sanitize');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const globalErroeHandler = require('./utils/global-error-handler');
const demoRouter = require('./routes/demoRouter');



const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
//app.use(express.cookieParser());
app.use(mongoSanitize());
app.use(xss());


app.use('/api/v1/demo',demoRouter);
app.use('*',(req,res,next)=>{
    res.status(404).json({
        message:'the link or route you have requested for is unavailable'
    });
});

app.use(globalErroeHandler);
module.exports = app;