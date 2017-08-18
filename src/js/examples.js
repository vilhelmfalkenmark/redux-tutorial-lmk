var a = "1";

var b = a;

b = "2";

// console.log(a);

var person = {
  name: "Ville"
}

var person2 = Object.assign({},person, {
  name: "Johan",
  age: 35
})

var arr = [1,2,3];
var names = ["ville","Johan","Britta"];
var stuff = [{stuff: "cool"}];

// Lägg till
var arr2 = arr.concat(names, stuff);

// console.log(arr);
console.log(arr2);

// Ta bort
function removeNumberThree(number) {
  console.log(number);
  if(number === 3) {
    return number;
  }
}

// const arr3 = arr.filter(removeNumberThree)

const arr3 = arr.filter((number, index, arr) => number !== 3);

// console.log(arr3, ' RESULTAT AV FILTER');

// Ändra



const arr4 = arr.map((number, index, originalArray) => {
  // console.log(number, 'number');
  // console.log(index, 'index');
  // console.log(originalArray, 'originalArray');
  if(number === 2) {
    return 4;
  }
  return number;
  // return {
  //   id: number,
  //   name: names[number - 1]
  // }
})

// console.log(arr4, ' RESULTAT AV MAP');
