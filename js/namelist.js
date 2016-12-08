

 var nameList = { name: ['Moe','Larry','Curly','Jane','Emma','Elizabeth','Elinor','Mary','Darcy','Grey','Lydia','Harriet'],
age: [18, 19, 20, 20, 21, 18, 23, 25, 24, 18, 24, 18] };


 console.log(nameList);

 for (var i = 0; i < nameList.name.length; i++) {
   console.log(nameList.name[i] + ' is ' + nameList.age[i]);
 }
