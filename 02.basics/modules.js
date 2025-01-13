//jag har skapat en array i people.js
//för att hämta ut innehållet i people skriver jag såhär:
const getPeople = require('./people');
//nu när jag kallar denna filen i node så kommer arrayen från people komma 
//upp pga jag loggar ut den i people också 

//detta retunerar ett tom objekt ifall man inte har export i people.js
//om man har export så får variabeln det värdet av det man väljer
console.log(getPeople);
//hämtar ut people och ages från people.js
console.log(getPeople.people, getPeople.ages);

//jag kan inte få tag på people variabeln från people.js pga ej definerad 
// console.log(people);

//bara för att vi importerar en fil så betyder det inte att vi har tillgång till innehållet, man måste exportera


//jag kan göra något som heter destructuring, alltså att jag hämtar ut ett värde från people, ex:
//jag hade kunnat hämta ages också genom att skriva { people, ages }
const { people } = require('./people');
console.log('new people: ', people);
console.log('index? ', people[1]);


const os = require('os');
console.log(os.platform(), os.homedir());


