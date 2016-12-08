var name = ['Moe', 'Larry', 'Curly', 'Jane', 'Emma', 'Elizabeth', 'Elinor', 'Mary', 'Darcy', 'Grey']
var age = [18, 19, 20, 20, 21, 18, 23, 25, 24, 18]

var people = {}

function arrayToObject (keyArray, valueArray) {
  if (keyArray.length === valueArray.length) {
    for (var i = 0; i < keyArray.length; i++) {
      people[keyArray[i]] = valueArray[i]
    }
    console.log(people)
  } else {
    console.log('Sorry. The two array must be equal size.')
  }
};

arrayToObject(name, age)

if (people.leght > 0) {
  console.log(people.Moe)
}
