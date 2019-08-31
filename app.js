const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: false}));

// set static path (middleware)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/users', (req,res) => {
  let users = [
    {
      first_name: "John",
      last_name: "Doe",
      age: "34",
      gender:"Male"
    },
    {
      first_name: "Bill",
      last_name: "Paxton",
      age: "77",
      gender:"Male"
    },
    {
      first_name: "Stacey",
      last_name: "Miller",
      age: "26",
      gender:"Female"
    }
  ];

  res.json(users);

});

app.get('/download', (req,res) => {
  res.download(path.join(__dirname, '/downloads/LegalityofusingGoogleAnalytics.docx'))
});

app.get('/about', (req,res) => {
  res.redirect('/about.html');
});

app.post('/subscribe', (req,res) => {
  let name = req.body.name;
  let email = req.body.email;

  console.log(name+' has subscribed with' +email);
});

//Looks kinda like a magic method in PHP
app.get('/users/:name', (req, res) => {
  let user = req.params.name;
  res.send('<h1>' + user + '</h1>');
});

app.listen(3000, () => {
  console.log("server started on port 3000");
});
