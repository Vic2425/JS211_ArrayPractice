// .length
const cars = ['Ford', 'Kia', 'Hyundai', 'Toyota' ];
console.log(cars.length)

// .concat()
const moreCars = ['BMW', 'Acura', 'Nissa', 'Honda']
const totalCars = cars.concat(moreCars);
console.log(totalCars)

// indexOf() and .lastIndexOf()
console.log(totalCars.indexOf('Honda'));
console.log(totalCars.lastIndexOf('Ford'))

// .join()
const stringOfCars = totalCars.join()
console.log(stringOfCars)

//.split
const carsFromString = stringOfCars.split(',')
console.log(carsFromString)

// .reverse()
const carsInReverse = totalCars.reverse()
console.log(carsInReverse)

//.sort()
console.log(carsInReverse.sort())
let yourPrediction = carsInReverse[0];
console.log('My prediction of index 0 after sort is:', yourPrediction)
console.log('Use indexOf check on the prediction of Acura is:', carsInReverse.indexOf('Acura'))

//.slice()
const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']
const reptiles = pets.slice(4, 6)
console.log('array with slice:', reptiles)
console.log('Original Array after slice:', pets)
//Why do you think `snake` and `lizard` are still in the original array?---? the original array will not be modified.

// .splice()
const removedReptiles = pets.splice(4,2)
console.log('pets that removed from are:', removedReptiles)
console.log('New pets arr after remove:', pets)

// .pop()
const removedPet = pets.pop()
console.log('Last item removed is:', removedPet)
console.log('after removed last item:', pets)

//.push()
pets.push(removedPet)
console.log('put the removed item back:', removedPet)
console.log('after put remove item back:', pets)

//.shift() 
pets.shift()
console.log('use shift to remove 1st item:', pets)

//.unshift()
pets.unshift('turtle')
console.log('use unshift to add item to 1st index:', pets)

//.forEach()
const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]
const addTwo = [];
numbers.forEach(function(num){
  addTwo.push(num +2)
  // console.log(addTwo.push(num +2))
})
console.log(addTwo)
