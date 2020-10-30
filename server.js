const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 5000;
const budgetModel = require("./models/names_schema")
const url = 'mongodb://localhost:27017/personal_budget';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/', express.static('public'));


app.get('/personal_budget', (req, res) => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    budgetModel.find({})
                .then((data) => {
                    res.json(data);
                    mongoose.connection.close();
                })
                .catch((connectionError) => {
                    console.log(connectionError)
                })
        })
        .catch((connectionError) => {
            console.log(connectionError)
        })
});

app.post('/personal_budget', (req, res) => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    var budgetEntity = {
        title: req.body.title,
        budget: req.body.budget,
        color: req.body.color
    };
    
    budgetModel.insertMany(budgetEntity)
                .then((data) => {
                    res.json(data);
                    mongoose.connection.close();
                    console.log("Connection Closed");
                })
                .catch((connectionError) => {
                    console.log(connectionError)
                })
        })
        .catch((connectionError) => {
            console.log(connectionError)
        })
});

app.listen(port, () => {
    console.log(`API served at https://localhost:${port}`);
});

