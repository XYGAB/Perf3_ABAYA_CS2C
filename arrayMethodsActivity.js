//two arrays
let arr1 = ["Cecile", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
//Use concat() to join two arrays
console.log(arr1.concat(arr2));

let fruits = ["Banana", "Orange", "Apple", "Mango"];
//push() to add an element "Kiwi" to the array fruits
fruits.push("Kiwi");
console.log(fruits);

let array1 = [1, 2, 3];
//Use unshift() to add two numbers 4 and 5 to the beginning of the array
array1.unshift(4,5);
console.log(array1);

//Use pop() to remove the last element from the fruits array("Kiwi")
fruits.pop();
console.log(fruits);

let array2 = [1, 2, 3];
//Use shift() to remove the first element from the array
array2.shift();
console.log(array2);

//Use sort() to sort the fruits array alphabetically
console.log(fruits.sort());

//Use slice() to create a new array containing a portion of the fruits array
console.log(fruits.slice(0,3));

//Use splice() to insert and remove elements in the fruits array
fruits.splice(2, 1, "Durian");
console.log(fruits);
