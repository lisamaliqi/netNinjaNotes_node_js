const fs = require('fs'); //står för file system

//reading files
//använder sig av readFile metoden
//två argument, först filen man vill läsa, sedan en callback funktino
fs.readFile('./docs/blog1.txt', (err, data) => {
    if(err) {
        console.log('error!', err); 
    }
    //logga ut data, om man ej har toString så kommer det ut som buffert istället
    console.log('data!', data.toString());
});
//blockerar inte kod som står under, utan kör igång när det är klart
console.log('last line');


//writing files
//använder sig av writeFile metoden
//tre argument, först filen man vill skriva i, sen texten vi vill skriva, sen callback funktion
//detta kommer skriva över hello, lisa! i blog1 och byta det till hello, tova
fs.writeFile('./docs/blog1.txt', 'hello, tova', () => {
    console.log('file was written');
});
//detta är inte en blockerande kod

//jag kan skapa en helt ny fil genom att skriva ett annat namn som ej finns, ex blog2
fs.writeFile('./docs/blog2.txt', 'hello, lisa', () => {
    console.log('file was written in NEW doc!');
});

//directories
//använder sig av mkdir och rmdir
//såhär skapar man en folder/directory
//först tar man in namnet på den foldern man vill skapa, sen en callback funktion

//om det INTE finns en folder som heter assets, skapa assets med mkdir
if(!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if(err) {
            console.log('error!!!!!', err);
        }
        console.log('folder created');
    });
} else { //om filen finns, ta bort den med rmdir
    fs.rmdir('./assets', (err) => {
        if(err) {
            console.log('error again...', err);
        }
        console.log('folder deleted');
    });
};

//om man försöker skriva denna kod igen så kommer det bli error pga filen finns redan
//därför smart att lägga i en if-statement ex
//detta är inte blockerande kod 


//deleting files
//använder sig av unlink metoden 
if(fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err) {
            console.log('error again...', err);
        }
        console.log('file deleted');
    });
} else {
    console.log('cant find file');
};