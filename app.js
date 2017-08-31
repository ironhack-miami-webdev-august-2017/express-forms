const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');


const app = express();


app.set('views', 'views');
app.set('view engine', 'ejs');
app.set('layout', 'my-master-layout.ejs');

app.use(expressLayouts);
app.use(express.static('public'));

// creates "req.body" for our POST routes
app.use(bodyParser.urlencoded({ extended: true }));



// ROUTES GO HERE ☟☟☟---------------------------------------------------------

app.get('/', (req, res, next) => {
    res.render('home.ejs');
});



// STEP #1: Display Form
app.get('/search', (req, res, next) => {
    res.render('search-form.ejs');
});

// STEP #2: Receive Submission

// <form method="get" action="/search-results">
app.get('/search-results', (req, res, next) => {
    console.log('QUERY STRING INFO --------------------');
    console.log( req.query );

                  // <input name="mySearchTerm">
    res.locals.myTerm = req.query.mySearchTerm;

    // <input type="checkbox" name="hotDogOption">

    // Show hot dog results if you CHECKED the box
    if (req.query.hotDogOption === 'on') {
        res.render('hot-dog-results.ejs');
    }

    // Show the normal fake results page if you DIDN'T check the box
    else {
        res.render('fake-results.ejs');
    }
});



// STEP #1: Display Form
app.get('/login', (req, res, next) => {
    res.render('login-form.ejs');
});

// STEP #2: Receive Submission
app.post('/checklogin', (req, res, next) => {
    console.log('FORM BODY INFO ***********************');
    console.log( req.body );
    // "req.body" is created by the "body-parser" npm package

    // If the submitted email and password are CORRECT, display the welcome page.
    if (req.body.emailValue === 'a@a.a' && req.body.passwordValue === 'aaaa') {
        res.render('welcome.ejs');
    }

    // If the email and password are NOT correct, display the go away page.
    else {
        res.render('go-away.ejs');
    }
});

// ROUTES ☝︎☝︎☝︎-----------------------------------------------------------------


app.listen(3000);
