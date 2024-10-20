//an object called car with the properties type, model, and color
const car = {
    Type : "Honda",
    Model : "Civic",
    Color : "Black"
}

console.log(typeof car);//Use typeof to check the type of the object

car.Type = "Toyota";//Update the type property to "Toyota"
console.log(car);

car.Wheels = 4;//Add a new property wheels with the value 4
console.log(car);