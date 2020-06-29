const express = require('express')
const routes = require('./routes');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express()


//database
mongoose.connect('mongodb://localhost:27017/admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    user: 'root',
    pass: 'root'
})

app.use(express.static('tmp'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(routes)

app.listen(3333)