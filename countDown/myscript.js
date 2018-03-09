function countDown(n){
	let id = setInterval(function(){
		if (n>0)  {
			console.log(n);
			n-=1;}
		else {
			console.log("Ring Ring Ring!!!");
			clearInterval(id);
		}
	}, 100);

	// var id = setInterval(logger.bind(this, n), 100);
}

function logger(n){
	if (n>0) {
		console.log(n);
		n-=1;}
	else {
		console.log("Ring Ring Ring!!!");
		clearInterval(id);
	}
}


//countDown(5);
//setInterval(function(){console.log("test")}, 100);


/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
	addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
	
	// [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr, key, value){
	arr.forEach((item, index, arr) => {
		arr[index][key]=value;
	});
}

//document.querySelector("#output").innerHTML = 
// var arr=[{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
// addKeyAndValue(arr, 'title', 'instructor') ;
// console.log(arr);

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
	vowelCount('Elie') // {e:2,i:1};
	vowelCount('Tim') // {i:1};
	vowelCount('Matt') // {a:1})
	vowelCount('hmmm') // {};
	vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelTest(s) {
	return (/^[aeiou]$/i).test(s);
}

function vowelCount(str){
	var res={};
	for (let i=0; i<str.length; i++)
	{
		if (vowelTest(str.charAt(i).toLowerCase()))
		{
			if (!res[str.charAt(i).toLowerCase()]) res[str.charAt(i).toLowerCase()]=0;
			res[str.charAt(i).toLowerCase()]+=1;
		}
	}
	return res;
}



//#75715E
//console.log(vowelCount('Elie'));



/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
	doubleValues([1,2,3]) // [2,4,6]
	doubleValues([1,-2,-3]) // [2,-4,-6]
*/

function doubleValues(arr){
	return arr.map(i=>{return 2*i;});
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
	valTimesIndex([1,2,3]) // [0,2,6]
	valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr){
	return arr.map((val, index) => {
		return val*index;
	});
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
	extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key){
	return arr.map(i=>{
		return i[key];

	});
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
	extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr){
	return arr.map(i=>{
		return i.first+" "+i.last;

	});
}

// =============== FILTER EXERCISES =======================

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
	filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key){
	return arr.filter(i=>{
		return i[key]===true;
	});
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
	find([1,2,3,4,5], 3) // 3
	find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue){
	return arr.filter(i=>{
		return i===searchValue;
	})[0];
}

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the arrayt.

Examples:
	findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue){
	return arr.filter(i=>{
		return i[key]===searchValue;
	})[0];    
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
	removeVowels('Elie') // ('l')
	removeVowels('TIM') // ('tm')
	removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str){
	
}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).

Examples:
	doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
	doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr){
	
}


// ============ CLOSURES =============


/* 
Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, it should return the product of the two. If the function is only passed one parameter - it should return a function which can later be passed another parameter to return the product. You will have to use closure and arguments to solve this.

Examples: 

	specialMultiply(3,4); // 12
	specialMultiply(3)(4); // 12
	specialMultiply(3); // function(){}....
*/

function specialMultiply(a,b){
	if (arguments.length == 1)
		return x=>{return a*x;};
	return a*b;
}

/* 
Write a function called guessingGame which takes in one parameter amount. The function should return another function that takes in a parameter called guess. In the outer function, you should create a variable called answer which is the result of a random number between 0 and 10 as well as a variable called guesses which should be set to 0.

In the inner function, if the guess passed in is the same as the random number (defined in the outer function) - you should return the string "You got it!". If the guess is too high return "Your guess is too high!" and if it is too low, return "Your guess is too low!". You should stop the user from guessing if the amount of guesses they have made is greater than the initial amount passed to the outer function.

You will have to make use of closure to solve this problem.

Examples (yours might not be like this, since the answer is random every time):

	var game = guessingGame(5)
	game(1) // "You're too low!"
	game(8) // "You're too high!"
	game(5) // "You're too low!"
	game(7) // "You got it!"
	game(1) // "You are all done playing!"

	var game2 = guessingGame(3)
	game2(5) // "You're too low!"
	game2(3) // "You're too low!"
	game2(1) // "No more guesses the answer was 0"
	game2(1) // "You are all done playing!"
*/

function guessingGame(amount){
	var answer = Math.round(Math.random()*10);
	var amount = amount;
	return guess=>{
		amount--;
		if (amount<0) return "You are all done playing!";
		if (guess == answer) return "You got it!";
		else {
			if (!amount) return "No more guesses the answer was " + answer;
			if (guess < answer) return "You're too low!";
			if (guess > answer) return "You're too high!";
		}
	};
}


//======================= Call, Apply, Bind =================

/*
Write a function called arrayFrom which converts an array-like-object into an array.

Examples:
	var divs = document.getElementsByTagName('divs');
	divs.reduce // undefined
	var converted = arrayFrom(divs);
	converted.reduce // function(){}....
*/

function arrayFrom(arrayLikeObject){
	return [].slice.call(arrayLikeObject);
}

/* 
// Write a function called sumEvenArguments which takes all of the arguments passed to a function and returns the sum of the even ones.

Examples:
	sumEvenArguments(1,2,3,4) // 6
	sumEvenArguments(1,2,6) // 8
	sumEvenArguments(1,2) // 2
*/

function sumEvenArguments(){
	return [].slice.call(arguments).filter(i=>{
		return (!(i%2));
	}).reduce((acc,next)=>{
		return acc+next;
	});
}

/* 
Write a function called invokeMax which accepts a function and a maximum amount. invokeMax should return a function that when called increments a counter. If the counter is greater than the maximum amount, the inner function should return "Maxed Out"

Examples:

	function add(a,b){
		return a+b
	}

	var addOnlyThreeTimes = invokeMax(add,3);
	addOnlyThreeTimes(1,2) // 3
	addOnlyThreeTimes(2,2) // 4
	addOnlyThreeTimes(1,2) // 3
	addOnlyThreeTimes(1,2) // "Maxed Out!"

*/

function invokeMax(fn, num){
	var counter = num;
	return fn=>{
		if (!counter)
			return "Maxed out!";
		counter--;
		return fn;
	};
	
}

/* 
Write a function called once which accepts two parameters, a function and a value for the keyword 'this'. Once should return a new function that can only be invoked once, with the value of the keyword this in the function set to be the second parameter.

Examples:
*/
	// function add(a,b){
	//     return a+b
	// }

	// var addOnce = once(add, this);
	// //console.log(addOnce);
	// console.log(addOnce(2,2)); // 4
	// console.log(addOnce(2,2)); // undefined
	// console.log(addOnce(2,2)); // undefined
	
	// function doMath(a,b,c){
	//     return this.firstName + " adds " + (a+b+c)
	// }
	
	// var instructor = {firstName: "Elie"}
	// var doMathOnce = once(doMath, instructor);
	// console.log(doMathOnce(1,2,3)) // "Elie adds 6"
	// console.log(doMathOnce(1,2,3)) // undefined
	



function once(fn, thisArg){
	var invoked = false;
	return function(){
		if (!invoked) {
			invoked=true; 
			return fn.apply(thisArg, arguments);}
		}
}


// BONUSES! 

/* 
Write a function called bind which accepts a function and a value for the keyword this. Bind should return a new function that when invoked, will invoke the function passed to bind with the correct value of the keyword this. HINT - if you pass more than two parameters to bind, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure!
Examples:*/
 //    function firstNameFavoriteColor(favoriteColor){
 //        return this.firstName + "'s favorite color is " + favoriteColor
 //    }
 //    var person = {
 //        firstName: 'Elie'
 //    }
 //    var bindFn = bind(firstNameFavoriteColor, person);
 //    console.log(bindFn('green')) // "Elie's favorite color is green"
	
 //    var bindFn2 = bind(firstNameFavoriteColor, person, 'blue');
 //    console.log(bindFn2('green')) // "Elie's favorite color is blue" 
	
 //    function addFourNumbers(a,b,c,d){
 //        return a+b+c+d;
 //    }
	// console.log(bind(addFourNumbers,this,1));
 //    console.log(bind(addFourNumbers,this,1)(2,3,4)); // 10
 //    console.log(bind(addFourNumbers,this,1,2)(3,4) );// 10
 //    console.log(bind(addFourNumbers,this,1,2,3)(4)); // 10
 //    console.log(bind(addFourNumbers,this,1,2,3,4)()); // 10
 //    console.log(bind(addFourNumbers,this)(1,2,3,4)); // 10
 //    console.log(bind(addFourNumbers,this)(1,2,3,4,5,6,7,8,9,10)); // 10



function bind(fn, thisArg){
	var temp = [].slice.call(arguments, 2);
	return function () {
		return fn.apply(thisArg, temp.concat([].slice.call(arguments)));
	}
}

/* 
Write a function called flip which accepts a function and a value for the keyword this. Flip should return a new function that when invoked, will invoke the function passed to flip with the correct value of the keyword this and all of the arguments passed to the function REVERSED. HINT - if you pass more than two parameters to flip, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure! 

Examples:*/

// function personSubtract(a,b,c){
//     return this.firstName + " subtracts " + (a-b-c);
// }

// var person = {
//     firstName: 'Elie'
// }

// var flipFn = flip(personSubtract, person);
// console.log(flipFn(3,2,1)) // "Elie subtracts -4"

// var flipFn2 = flip(personSubtract, person, 5,6);
// console.log(flipFn2(7,8)) // "Elie subtracts -4"

function subtractFourNumbers(a,b,c,d){
    return a-b-c-d;
}

// console.log(flip(subtractFourNumbers,this,1)(2,3,4)); // -2
// console.log(flip(subtractFourNumbers,this,1,2)(3,4)); // -2
// console.log(flip(subtractFourNumbers,this,1,2,3)(4)); // -2
// console.log(flip(subtractFourNumbers,this,1,2,3,4)()); // -2
// console.log(flip(subtractFourNumbers,this)(1,2,3,4)); // -2
// console.log(flip(subtractFourNumbers,this,1,2,3)(4,5,6,7)); // -2
// console.log(flip(subtractFourNumbers,this)(1,2,3,4,5,6,7,8,9,10)); // -2
// console.log(flip(subtractFourNumbers,this,11,12,13,14,15)(1,2,3,4,5,6,7,8,9,10)); // -22




// function flip(fn, thisArg){
// 	var temp = [].slice.call(arguments, 2);
// 	return function () {
// 		var numArgs = arguments.length-temp.length;
// 		var allArgs = temp.concat([].slice.call(arguments)).slice(0,fn.length);
// 		return fn.apply(thisArg, allArgs.reverse());
// 	}    
// }


// ============= Constructors ==============

// PART 1

// Create a constructor function for a Person, each person should have a firstName, lastName, favoriteColor and favoriteNumber. Your function MUST be named Person. 

// Write a method called multiplyFavoriteNumber that takes in a number and returns the product of the number and the object created from the Person functions' favorite number.

// function Person(firstName, lastName, favoriteColor, favoriteNumber){
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// 	this.favoriteColor = favoriteColor;
// 	this.favoriteNumber = favoriteNumber;
	
// 	var multiplyFavoriteNumber = function(num){
// 		return num*this.favoriteNumber;
// 	}
// }



// PART 2

// Given the following code - refactor the Child function to remove all the duplication from the Parent function. You should be able to remove 4 lines of code in the Child function and replace it with 1 single line.

function Parent(firstName, lastName, favoriteColor, favoriteFood){
	Person.call(this, firstName, lastName, favoriteColor);
	this.favoriteFood = favoriteFood;
}

function Child(firstName, lastName, favoriteColor, favoriteFood){
	Parent.call(this, firstName, lastName, favoriteColor, favoriteFood);
}


//====================== Prototypes =====================


function Vehicle(make, model, year){
	this.make=make;
	this.model=model;
	this.year=year;
	this.isRunning = false;

	Vehicle.prototype.turnOn = function() {
		this.isRunning = true;
	};
	Vehicle.prototype.turnOff = function() {
		this.isRunning = false;
	};
	Vehicle.prototype.honk = function() {
		if (this.isRunning) return 'beeb';
	};
}


// v1 = new Vehicle('make1', 'model1', 'year1');
// v2 = new Vehicle('make2', 'model2', 'year2');

// console.log(v1.honk());
// console.log(v1.turnOn());
// console.log(v1.honk());
// console.log(v2.honk());



// 1 - Create a constructor function for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber)

/* 2 - Add a function on the Person.prototype called fullName that returns the firstName and lastName property of an object created by the Person constructor concatenated together.
	
Examples:    
	var person = new Person("Elie", "Schoppik", "purple", 34)
	person.fullName() // "Elie Schoppik"

*/

// 3 -  Add a property on the object created from the Person function called family which is an empty array. This will involve you adding an additional line of code to your Person constructor.

/* 4 - Add a function on the Person.prototype called addToFamily which adds an object constructed from the Person constructor to the family array. To make sure that the object you are adding is an object construced from the Person constructor (HINT - take a look at the instanceof keyword). Make sure that your family array does not include duplicates! This method should return the length of the family array.

Examples: */
	
	var person = new Person("Elie", "Schoppik", "purple", 34)
	var anotherPerson = new Person()
	person.addToFamily(anotherPerson); // 1
	person.addToFamily(anotherPerson); // 1
	person.family.length // 1
	
	// console.log(person.addToFamily("test") );// 1
	// console.log(person.addToFamily({})); // 1
	// console.log(person.addToFamily([])); // 1
	// console.log(person.addToFamily(false)); // 1
	// console.log(person.family.length); // 1


// function Person(firstName, lastName, favoriteColor, favoriteNumber){
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// 	this.favoriteColor = favoriteColor;
// 	this.favoriteNumber = favoriteNumber;
// 	this.family = [];

// 	Person.prototype.fullName = function() {
// 		return this.firstName + " " + this.lastName;
// 	};

// 	Person.prototype.addToFamily = function(item) {
// 		if (item instanceof Person)
// 			if (this.family.indexOf(item)===-1)
// 				this.family.push(item);
// 		return this.family.length;

// 	};
	
// 	var multiplyFavoriteNumber = function(num){
// 		return num*this.favoriteNumber;
// 	}
// }

// function Parent(firstName, lastName, favoriteColor, favoriteFood){
// 	Person.call(this, firstName, lastName, favoriteColor);
// 	this.favoriteFood = favoriteFood;
// }

// function Child(firstName, lastName, favoriteColor, favoriteFood){
// 	Parent.call(this, firstName, lastName, favoriteColor, favoriteFood);
// }









// PART II 

// 1 - Implement your own version of Array.prototype.map. The function should accept a callback and return a new array with the result of the callback for each value in the array. 

/* 2 - Implement a function called reverse that reverses a string and place it on the String.prototype

Examples:
	"test".reverse() // "tset"
	"tacocat".reverse() // "tacocat"
*/

Array.prototype.map = function(callback) {
	var res = [];
	for (var i=0; i<this.length; i++){
		res.push(callback(this[i], i, this));
	}
	return res;
}

String.prototype.reverse = function() {
	var res = '';
	for (var i=this.length-1; i>=0; i--){
		res+=this[i];
	}
	return res;
}


// 1 - Create a constructor function for a Vehicle. Each vehicle should have a make, model and year property.

// 2 - Add a function to the Vehicle prototype called start which returns the string "VROOM!"

// 3 - Add a function to the Vehicle prototype called toString which returns the string "The make, model, and year are" concatenated with the make, model and year property

/* Examples */
	// var vehicle = new Vehicle("Tractor", "John Deere", 1999)
	// console.log(vehicle.toString()) // 'The make, model, and year are Tractor John Deere 1999'


// 4 - Create a constructor function for a Car. Each object created from the Car function should also have a make, model, and year and a property called numWheels which should be 4. The Car prototype should inherit all of the methods from the Vehicle prototype

// 5 - Create a constructor function for a Motorcycle. Each object created from the Motorcycle function should also have a make, model, and year and a property called numWheels which should be 2. The Motorcycle prototype should inherit all of the methods from the Vehicle prototype

// function Vehicle (make, model, year){
// 	this.make = make;
// 	this.model = model;
// 	this.year = year;
// }

// Vehicle.prototype.start = function() {
// 	return "VROOM!";
// }




// Vehicle.prototype.toString = function() {
// 	console.log(this.make);
// 	return "The make, model, and year are " + this.make + " " + this.model + " " + this.year;
// }	

// function Car (make, model, year){
// 	this.numWheels = 4;
// 	return Vehicle.apply(this, arguments);
// }

// Car.prototype = Object.create(Vehicle.prototype);
// Car.prototype.constructor = Car;

// function Motorcycle (make, model, year){
// 	this.numWheels = 2;
// 	return Vehicle.apply(this, arguments);
// }

// Motorcycle.prototype = Object.create(Vehicle.prototype);
// Motorcycle.prototype.constructor = Motorcycle;




function Vehicle(make,model,year){
  this.make = make;
  this.model = model;
  this.year = year;
}

Vehicle.prototype.start = function(){
  return "VROOM!"
}

Vehicle.prototype.toString = function(){
  return "The make, model, and year are " + this.make + " " + this.model  + " " + this.year;
}

function Car(make,model,year){
  Vehicle.apply(this, arguments)
  this.numWheels = 4;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

function Motorcycle(make,model,year){
  Vehicle.apply(this, arguments)
  this.numWheels = 2;
}

Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;



// ====================== ES2015 ===================================

/* 1 - Refactor the following code to use ES2015 arrow functions - make sure your function is also called tripleAndFilter
*/

function tripleAndFilter(arr){
  return arr.map(value=> value * 3).filter(value => value % 5 === 0);
}




/* 2 - Refactor the following code to use ES2015 arrow functions. Make sure your function is also called doubleOddNumbers
*/

function doubleOddNumbers(arr){
	return arr.filter(val => val % 2 !== 0).map(val => val *2);
}




/* 3 - Refactor the following code to use ES2015 arrow functions. Make sure your function is also called mapFilterAndReduce. */

function mapFilterAndReduce(arr){
  return arr.map(val => val.firstName).filter(val => val.length < 5).reduce((acc,next) => 
	{acc[next] = next.length;
	return acc;}, {})
}



/* 4 - Write a function called createStudentObj which accepts two parameters, firstName and lastName and returns an object with the keys of firstName and lastName with the values as the parameters passed to the function.

Example:
	createStudentObj('Elie', 'Schoppik') // {firstName: 'Elie', lastName: 'Schoppik'}
*/


function createStudentObj (firstName, lastName){
	return {firstName: firstName, lastName: lastName};
}


/* 5 - Given the following code: 


Refactor this code to use arrow functions to make sure that in 1000 milliseconds you console.log 'Hello Colt'
*/    

var instructor = {
  firstName: "Colt",
  sayHi: function(){
	setTimeout(() => console.log('Hello ' + this.firstName),1000)
  }
}


// var myarr = [5,4,3];
// for (var i of myarr){
// 	console.log(i);
// }




// ======================== Rest and spread ===================================

/* 
Write a function called smallestValue which accepts a variable number of parameters and returns the smallest parameters passed to the function.

Examples:
	console.log(smallestValue(4,1,12,0)) // 0
	console.log(smallestValue(5,4,1,121)) // 1
	console.log(smallestValue(4,2)) // 2
	console.log(smallestValue(99,12321,12,2)) // 2*/


function smallestValue(...a){
	return Math.min(...a);
}

/* 
Write a function called placeInMiddle which accepts two parameters, an array and another array. This function should return the first array with all of the values in the second array placed in the middle of the first array.

Examples:
	console.log(placeInMiddle([1,2,6,7],[3,4,5])) // [1,2,3,4,5,6,7]
	console.log(placeInMiddle([1],[3,4,5])) // [3,4,5,1]
	console.log(placeInMiddle([1,6],[2,3,4,5])) // [1,2,3,4,5,6]
	console.log(placeInMiddle([],[2,3,4,5])) // [2,3,4,5]
*/

function placeInMiddle(arr, vals){
	arr.splice(Math.floor(arr.length/2),0,...vals);
	return arr;
	
}

/* 
Write a function called joinArrays which accepts a variable number of parameters (you can assume that each argument to this function will be an array) and returns an array of all of the parameters concatenated together

Examples:

	joinArrays([1],[2],[3]) // [1,2,3]
	joinArrays([1],[2],[3],[1],[2],[3]) // [1,2,3,1,2,3]
	joinArrays([1,2,3],[4,5,6],[7,8,9]) // [1,2,3,4,5,6,7,8,9]
	joinArrays([1],[3],[0],[7]) // [1,3,0,7]

*/

function joinArrays(...args){
	let res = [];
	for (let i of args) res.push(...i);
	return res;
}

/* 
// Write a function called sumEvenArgs which takes all of the parameters passed to a function and returns the sum of the even ones.

Examples:

*/

function sumEvenArgs(...a){
	return a.filter (i => i%2===0).reduce((acc,next)=>acc+=next);
}


// sumEvenArgs(1,2,3,4) // 6
// sumEvenArgs(1,2,6) // 8
// sumEvenArgs(1,2) // 2

/* 
Write a function called flip which accepts a function and a value for the keyword this. Flip should return a new function that when invoked, will invoke the function passed to flip with the correct value of the keyword this and all of the parameters passed to the function REVERSED. HINT - if you pass more than two parameters to flip, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure!

Examples:*/




function flip(fn, thisArg, ...outerArgs){
	return function (...innerArgs){
		let allArgs = [...outerArgs, ...innerArgs].reverse().slice(this.length - fn.length);
		console.log(allArgs)
		return fn.apply(thisArg, allArgs);

	}
}



function personSubtract(a,b,c){
	return this.firstName + " subtracts " + (a-b-c);
}



var person = {
	firstName: 'Elie'
}

// var flipFn = flip(personSubtract, person);
// flipFn(3,2,1) // "Elie subtracts -4"

// var flipFn2 = flip(personSubtract, person, 5,6);
// flipFn2(7,8) // "Elie subtracts -4"

// flip(subtractFourNumbers,this,1)(2,3,4) // -2
// flip(subtractFourNumbers,this,1,2)(3,4) // -2
// flip(subtractFourNumbers,this,1,2,3)(4) // -2
// flip(subtractFourNumbers,this,1,2,3,4)() // -2
// flip(subtractFourNumbers,this)(1,2,3,4) // -2
// flip(subtractFourNumbers,this,1,2,3)(4,5,6,7) // -2
// flip(subtractFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // -2
// flip(subtractFourNumbers,this,11,12,13,14,15)(1,2,3,4,5,6,7,8,9,10) // -22


/* 
Write a function called bind which accepts a function and a value for the keyword this. Bind should return a new function that when invoked, will invoke the function passed to bind with the correct value of the keyword this. HINT - if you pass more than two parameters to bind, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure!

Examples:

	function firstNameFavoriteColor(favoriteColor){
		return this.firstName + "'s favorite color is " + favoriteColor
	}
	
	var person = {
		firstName: 'Elie'
	}
	
	var bindFn = bind(firstNameFavoriteColor, person);
	bindFn('green') // "Elie's favorite color is green"
	
	var bindFn2 = bind(firstNameFavoriteColor, person, 'blue');
	bindFn2('green') // "Elie's favorite color is blue" 
	
	function addFourNumbers(a,b,c,d){
		return a+b+c+d;
	}

	bind(addFourNumbers,this,1)(2,3,4) // 10
	bind(addFourNumbers,this,1,2)(3,4) // 10
	bind(addFourNumbers,this,1,2,3)(4) // 10
	bind(addFourNumbers,this,1,2,3,4)() // 10
	bind(addFourNumbers,this)(1,2,3,4) // 10
	bind(addFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // 10

*/

function bind(fn, thisArg, ...outerArgs){
	return function(...innerArgs){
		return fn.apply(thisArg, outerArgs.concat(innerArgs))
	}
}

// function firstNameFavoriteColor(favoriteColor){
// 	return this.firstName + "'s favorite color is " + favoriteColor
// }

// var person = {
// 	firstName: 'Elie'
// }

// var bindFn = bind(firstNameFavoriteColor, person);
// bindFn('green') // "Elie's favorite color is green"

// var bindFn2 = bind(firstNameFavoriteColor, person, 'blue');
// bindFn2('green') // "Elie's favorite color is blue" 

// function addFourNumbers(a,b,c,d){
// 	return a+b+c+d;
// }

// bind(addFourNumbers,this,1)(2,3,4) // 10
// bind(addFourNumbers,this,1,2)(3,4) // 10
// bind(addFourNumbers,this,1,2,3)(4) // 10
// bind(addFourNumbers,this,1,2,3,4)() // 10
// bind(addFourNumbers,this)(1,2,3,4) // 10
// bind(addFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // 10




//============================== Destructuring objects =======================

/* 
Write a function called displayStudentInfo which accepts an object and returns the string "Your full name is" concatenated with the value of the first key and a space and then the value of the last key. See if you can destructure this object inside of the function.

Examples:
    displayStudentInfo({first: 'Elie', last:'Schoppik'}) // 'Your full name is Elie Schoppik')
*/

// function displayStudentInfo(obj){
// 	var {first,last} = obj;
//     return `Your full name is ${first} ${last}`;
// }


function displayStudentInfo(obj){
    var {first,last} = obj;
    return "Your full name is "+first+" "+last;
}

/* 
Write a function called printFullName which accepts an object and returns the string "Your full name is" concatenated with the value of the first key and a space and then the value of the last key. See if you can destructure this object DIRECTLY from the parameters. The output of the printFullName function should be the exact same as the displayStudentInfo function. 

Examples:
    printFullName({first: 'Elie', last:'Schoppik'}) // 'Your full name is Elie Schoppik'
*/

// you will have to pass in the correct parameters for this function!
function printFullName({first,last}){
    return `Your full name is ${first} ${last}`;
}

/* 
Write a function called createStudent which accepts as a parameter, a default parameter which is a destructured object with the key of likesES2015 and value of true, and key of likesJavaScript and value of true. 

    If both the values of likesJavaScript and likesES2015 are true, the function should return the string 'The student likes JavaScript and ES2015'. 
    If the value of likesES2015 is false the function should return the string 'The student likes JavaScript!'
    If the value of likesJavaScript is false the function should return the string 'The student likesES2015!'
    If both the value of likesJavaScript and likesES2015 are false, the function should return the string 'The student does not like much...'

Examples:
    createStudent() // 'The student likes JavaScript and ES2015')
    createStudent({likesES2015:false}) // 'The student likes JavaScript!')
    createStudent({likesJavaScript:false}) // 'The student likes ES2015!')
    createStudent({likesJavaScript:false, likesES2015:false}) // 'The student does not like much...')
*/

// you will have to pass in the correct parameters for this function!
function createStudent({likesES2015 = true, likesJavaScript = true}={}){
	if (likesES2015 && likesJavaScript) return 'The student likes JavaScript and ES2015!';
	else if (likesJavaScript) return 'The student likes JavaScript!';
	else if (likesES2015) return 'The student likesES2015!';
	else return 'The student does not like much...';
    
}

/* 
Write a function called reverseArray which accepts an array and returns the array with all values reversed. See if you can do this without creating a new array!

Examples:
    reverseArray([1,2,3,4,5]) // [5,4,3,2,1]
    reverseArray([1,2]) // [2,1]
    reverseArray([]) // []
    reverseArray([1,2,3,4,5,6,7,8,9,10]) // [10,9,8,7,6,5,4,3,2,1
*/

function reverseArray(arr){
    let left = 0;
    let right = arr.length-1;
    while (left < right){
    	// let temp = arr[left];
    	// arr[left] = arr[right];
    	// arr[right] = temp;
    	[arr[left],arr[right]] = [arr[right],arr[left]];
    	left++;
    	right--;
    }
    return arr;
}


//================================= Class keyword ===========================

// 1 - Create a class for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber.

/* 2 - Add an instance method called multiplyFavoriteNumber that accepts one parameter and returns the product of the parameter multiplied with the favoriteNumber property on a person object.
    
Examples:    
    var person = new Person("Elie", "Schoppik", "purple", 34)
    person.multiplyFavoriteNumber(10) // 340

*/

class Person {
	constructor(firstName, lastName, favoriteColor, favoriteNumber){
		this.firstName = firstName;
		this.lastName = lastName;
		this.favoriteColor = favoriteColor;
		this.favoriteNumber = favoriteNumber;
	}

	multiplyFavoriteNumber(num){return this.favoriteNumber*num;}


	}