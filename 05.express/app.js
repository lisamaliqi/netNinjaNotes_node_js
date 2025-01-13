// require express
const express = require('express');

// måste starta express-app
const app = express();

// lyssna efter request 
app.listen(3000);

//innehåller två parametrar, första är den man letar efter, andra är callback funktion
app.get('/', (req, res) => {
    //i express behöver man ej ha sendHeader, express löser det åt en helt själv 
    //löser också statuskod helt utan att vi sätter det
    // res.send('<p>home page wooooop!</p>');

    //root är den mappen jag är i (05.express) och utifrån det så ska jag till views....
    res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    // res.send('<p>about page! wooooop!</p>');
    res.sendFile('./views/about.html', { root: __dirname });
});

// redirect 
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// 404 page
// use funktionen kommer att köras för varje gång en request kommer in, men BARA om det når den i koden
// detta betyder att varje request kommer att försöka vid varje GET som är över, hittar den en GET som är ex /about så stannar den där, annars fortsätter den
// pga detta så kommer alltså det BARA komma ner hit om den inte matchar med något tidigare
// detta ska alltså vara LÄNGTS ner på sidan!!
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});