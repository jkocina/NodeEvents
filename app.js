const express = require('express');
const path = require('path');

const app = express();

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

app.get('/download', (res,req) => {
  res.download(path.join(__dirname, '/download/LegalityofusingGoogleAnalytics.docx'))
})
/*
app.get('/', function(req, res) {
  res.send('Hello World');
});

app.get('/about', (req, res) => {
  res.send('<h1>About</h1>');
});
*/

//Looks kinda like a magic method in PHP
app.get('/users/:name', (req, res) => {
  let user = req.params.name;
  res.send('<h1>' + user + '</h1>');
});

app.listen(3000, () => {
  console.log("server started on port 3000");
});
