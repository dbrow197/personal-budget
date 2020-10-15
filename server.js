const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const data = require('./newBudget.json');

app.use(cors());
app.use('/', express.static('public'));

app.get('/budget', function (req, res) {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(data));
})

//app.get('/budget', (req, res) => {
//    res.json(budget);
//});
//possible myBudget

app.listen(port, () => {
    console.log(`API served at https://localhost:${port}`);
});

