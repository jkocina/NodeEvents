const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: false}));

// set static path (middleware)
app.use(express.static(path.join(__dirname, 'views')));

//Setting up the templating engine
app.set('view engine', 'ejs');

//Handling the pages
app.use('/', routes);

//Serving API information
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

//Download Document example
app.get('/download', (req,res) => {
  res.download(path.join(__dirname, '/downloads/LegalityofusingGoogleAnalytics.docx'))
});

/*redirectors
router.get('/about', (req,res) => {
  res.render('about');
});

router.get('/', (req,res) => {
  res.render('index')
});
router.get('/index', (req,res) => {
  res.render('index');
});
*/

//Post handler example
app.post('/subscribe', (req,res) => {
  let name = req.body.name;
  let email = req.body.email;

  console.log(name + ' has subscribed with ' + email + '\n');
  res.redirect('/index.html');
});

//Looks kinda like a magic method in PHP, dyanmic name handling
app.get('/users/:name', (req, res) => {
  let user = req.params.name;
  res.send('<h1>' + user + '</h1>');
});

//Launch the server
app.listen(3000, () => {
  console.log("server started on port 3000");
});
