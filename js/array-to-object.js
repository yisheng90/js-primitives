var name = ['Moe','Larry','Curly','Jane','Emma','Elizabeth','Elinor','Mary','Darcy','Grey'];
var age = [18, 19, 20, 20, 21, 18, 23, 25, 24, 18];

var people = {};

function arrayToObject(array1, array2) {
    for (var i = 0; i < array1.length; i++) {
      people[array1[i]] = array2[i];
    }
};

arrayToObject(name, age);

console.log(people);
console.log(people.Moe);
