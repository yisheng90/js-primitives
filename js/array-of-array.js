var arrayOfArray = [
  ['apple', 'pear', 'orange'],
  ['dog', 'mouse', 'cat'],
  ['green', 'blue', 'red'],
  ['wine', 'town', 'angle']
];


function toSingleArrayString(matrix) {
  var merged = [].concat.apply([], matrix).sort();
  var string = merged.toString();
  console.log(string);
}

toSingleArrayString(arrayOfArray);
