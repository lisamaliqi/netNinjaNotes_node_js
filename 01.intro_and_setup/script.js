/*
rollen med node är att skriva javascript i backend, alltså kan det vara uppkopplat till ex en databas
node är ett alternativ till ex python elr php så man slipper lära sig ett nytt språk

*/

//skapar en enkel variabel som jag sedan loggar ut 
const myName = 'lisa';
console.log(myName);

//för att kunna få ut denna informationen via node så behöver du öppna
//terminalen, ställa dig i mappen som du har filen i (aka 01.intro_and_setup) 
//och sedan skriva node (filnammet), i detta fall skrev jag node script 
// pga filen heter script.js (man behöver ej ha med js i slutet)
//detta loggar alltså sedan ut 'lisa' till terminalen 


const newName = 'tova';
console.log(newName);
//nu loggas det ut lisa och tova i terminalen 


//man kan också skicka funktioner i node!
const greet = (name) => {
    console.log(`Hello ${name}!`);
};

//logga ut både tova och lisa
greet('tova');
greet('lisa');
