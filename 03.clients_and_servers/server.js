//i node så måste man manuellt skapa en server som befinner sig i backend 

const http = require('http');

//skapa servern och förvara den i en variabel
//innehåller en callback funktion som har två argument, request och response
//detta kommer gå igenom varje gång en request kommer in
const server = http.createServer((req, res) => {
    console.log('request made');
});

//vi försöker lyssna efter en request på portnr 3000 och localhost 
server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000');
});

/*
i terminalen kommer det först komma 'listening for req...'
går man sedan till sin webb (typ google chrome) och skriver localhost:3000 i url så kommer det komma
'request made' i terminalen 
*/

/*
localHost är typ som en domain.namn fast den pekar direkt till din dator. Alltså lyssna för request från vår egna dator
port numbers är som dörrar in till datorer
när man använder localHost så ska man också inkludera port number, så man skriver:
localHost:3000
*/