//window objektet i en webbsida är sidans global object
//om jag vill göra setTimeout behöver jag inte skriva windows.setTimeout
//utan jag kan bara direkt skriva setTimeout 

//kallar det globala objektet i node för att se vad som ingår i det
// console.log(global);

//detta kommer slutföras igång efter 3 sek
//man kan skriva global.setTimeout men man BEHÖVER inte skriva global
setTimeout(() => {
    console.log('after timeout');
    //stoppar intervallen int efter 3 sek
    clearInterval(int);
}, 3000);

const int = setInterval(() => {
    console.log('in the interval');
}, 1000);
//om man vill avsluta node filen i terminalen så att den stoppas tryck control + c

//visar absolute path till directoryn filen är i
console.log(__dirname);
//visar absolut path till filen man är i 
console.log(__filename);
