const people = ['lisa', 'tova', 'unni', 'balderi'];
const people2 = ['balder', 'unni', 'lisa', 'tova'];
const ages = [23, 24, 2, 1];

console.log(people);


//om man har flera module.export så kommer det som är sist att exporteras till variabeln (aka så exporteras inte people)

//exporterar ett värde
module.exports = people;

//exporterar flera värden
//namnet people ska ha värdet från people2 (andra arrayen) 
//namet ages ska ha värdet ages (tredje arrayen)
module.exports = {
    people: people2,
    ages: ages
};