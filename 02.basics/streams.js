//hur man börjar använda data innan den har lästs klart helt

//read streams = läsa data
//write streams = skriva data

const fs = require('fs');

//READ STREAMS
//innehåller två argument, första är vart man vill hämta allt från (alltså fil), andra är
const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });

//WRITE STREAMS 
const writeStreams = fs.createWriteStream('./docs/blog4.txt');


//.on är en eventlistener, nu lyssnar vi på ett data-event
//alltså varje gång vi får en buffert av data från readStream så körs denna igång
/* 
readStream.on('data', (chunk) => {
    console.log('-----new chunk-----');
    console.log(chunk);
    //kan välja att skirva toString() efter chunk eller encoding: utf8 i variabeln, gör texten läsbar

    //för varje gång man läser in en ny chunk så ska ockås den chunken läggas till i blog4
    writeStreams.write('\nNEW CHUNK\n'); //radbrytning innan och efter new chunk
    writeStreams.write(chunk);//metod som skriver nya chunken
}); 
*/


//piping är ett lättare sätt än det som står över
//detta kommer dock ej ha med new chunk grejen
readStream.pipe(writeStreams);