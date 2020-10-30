const express = require('express');
const mongoose = require('mongoose');
const budgetModel = require("./models/names_schema")
const app = express();
const port = 5000;
const url = 'mongodb://localhost:27017/personal_budget';

app.use('/', express.static('public'));
app.use(express.json());





app.get('/personal_budget', (req, res) => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    budgetModel.find({})
                .then((data) => {
                    res.json(data);
                    mongoose.connection.close();
                })
                .catch((error) => {
                    console.log(error);
                });
        })
        .catch((error) => {
            console.log(error);
        });
});

app.post('/personal_budget', (req, res) => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    budgetModel.find({})
                .then((data) => {
                    res.json(data);
                    mongoose.connection.close();
                })
                .catch((error) => {
                    console.log(error);
                });
        })
        .catch((error) => {
            console.log(error);
        });
});

app.listen(port, () => {
    console.log(`API served at https://localhost:${port}`);
});

