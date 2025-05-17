require("dotenv").config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require('./config/db');
const baicRoute = require('../backend/routes/admin/basicInfo')
const contact = require('../backend/routes/admin/contact')
const portfolio = require('../backend/routes/admin/portfolio')
const portfolioCat = require('../backend/routes/admin/portfolioCategory')
const role = require('../backend/routes/admin/role')
const service = require('../backend/routes/admin/service')
const skill = require('../backend/routes/admin/skill')
const testimonial = require('../backend/routes/admin/testimonial')
const user = require('../backend/routes/admin/user')
const home = require('../backend/routes/front/home')

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/api/admin/basic-info',baicRoute);
app.use('/api/admin/contact',contact);
app.use('/api/admin/portfolio',portfolio)
app.use('/api/admin/portfolio-category',portfolioCat)
app.use('/api/admin/role',role)
app.use('/api/admin/service',service) 
app.use('/api/admin/skill',skill)
app.use('/api/admin/testimonial',testimonial)
app.use('/api/admin/user',user)
app.use('/api/front/home',home)

app.use((req,res)=>{
    res.status(404).json({message:"Invalid Url"});
})

app.listen(process.env.PORT,()=>{
    connectDB();
    console.log(`Connected to port ${process.env.PORT}`)
})
