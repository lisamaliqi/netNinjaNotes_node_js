//middleware är datan i servern som skickar ut olika saker typ?
//typ när vi anropade alla de olika servarna i 04 så breakade det ifall ett namn matchade in i det vi hade i switch-statementet, det går uppifrån och ner så vikigt att man skriver i rätt ordning
/**
 *      Detta kan man göra med Middleware:
 * Skapa en logger middleware som loggar alla detaljer om varje request
 * skapa authentication checks
 * parse JSON data från post requests
 * returna 404-sida
 */


const express = require('express');

//morgan är ett lättare sätt att skapa middleware
//behöver installera som express
const morgan = require('morgan');
const app = express();

app.listen(3000);

//fixa custom middleware
app.use((req, res, next) => {
    console.log('New request made: ');
    console.log('host: ', req.hostname); //borde vara localhost
    console.log('path: ', req.path); //vilken väg eller path man tar (about, index, 404)
    console.log('method: ', req.method); //vilken metod (GET)
    
    //utan detta hade sidan bara stått och laddat, detta berättar att vi ska vidare till nästa middleware
    next();
});

app.use((req, res, next) => {
    console.log('In the next middleware');
    next();
});

//hämta ut statiska filer (ex style.css)
app.use(express.static('public'));
//allt som finns i mappen som heter public kommer bli available som public!
//jag har anropat style i about.html så den sidan blir blå!

//använda morgan, mycket lättare! istället för att skriva middleware automatiskt 
app.use(morgan('dev'));




// index
app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname });
});

// About 
app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname });
});

// redirect 
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

//om inget av de övriga paths matchar så kommer browserns skicka 404-sidan, se detta som default värde, därav måste detta vara längst ner
// 404 page
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});
