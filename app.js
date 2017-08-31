const express = require('express');
const expressLayouts = require('express-ejs-layouts');


const app = express();


app.set('views', 'views');
app.set('view engine', 'ejs');
app.set('layout', 'my-master-layout.ejs');

app.use(expressLayouts);
app.use(express.static('public'));



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



// ROUTES ☝︎☝︎☝︎-----------------------------------------------------------------


app.listen(3000);
