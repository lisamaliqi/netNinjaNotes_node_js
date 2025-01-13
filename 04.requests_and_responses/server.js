const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    //set header content type
    //detta är steg 1
    res.setHeader('Content-Type', 'text/html');
    //text/plain = plain text 
    //text/html = skickar html 

    //hur man skickar den datan till browser
    //steg 2
    // res.write('hello lisa!');      detta är med text/plain
    // res.write('<p>hello lisa!</p>');      detta är med text/html
    // res.write('<p>hello tova!</p>');      detta är med text/html

    //om man vill kunna ha flera filer samtidigt, path kommer alltid börja med views
    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            //redirect, alltså about-me ska till about 
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    };

    //skicka en fil/läsa fil
    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        } else {
            res.write(data);
            // steg 3
            res.end();
            //man hade också kunnat skriva res.end(data) istället för båda res.write och res.end, detta pga ifall man bara ska skicka en sak så behöver man inte ha write
        }
    });

    //berättar att jag vill avsluta, detta skickar det till browsern
    //steg 3
    // res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000');
});
