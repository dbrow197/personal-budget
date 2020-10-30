const express = require('express');
const mongoose = require('mongoose');
const budgetModel = require("./models/names_schema")
const app = express();
const port = 5000;
const url = 'mongodb://localhost:27017/personal_budget';

app.use('/', express.static('public'));

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

let Budget_listSchema = new mongoose.Schema({
  title: {
      type: String,
      required: true,
      maxLength: 25
  },
  cost: {
      type: Number,
      required: true,
      min: 1.00
  },
  color: {
      type: String,
      required: true,
      validator: [(hexColor) => (/^#[0-9A-F]{6}$/i).test(hexColor), 'Invalid hex color value']
  }
});

let Budget_list = mongoose.model('Budget_list', Budget_listSchema);

app.use('/', express.static('public'));
app.use(express.json());

app.get('/budget_lists', (req, res) => {
  Budget_list.find({}, (error, budget_lists) => {
        res.send(error || budget_lists);
    });
});

app.post('/budget_lists', (req, res) => {
  Budget_list.create(req.body, (error, budget_list) => {
        res.send(error || budget_list);
    })
});

app.listen(port, () => {
    console.log(`API served at https://localhost:${port}`);
});

