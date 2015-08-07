//Variables
var firstName = "Danielle" ; //string
var numOfdays = 7; //number
var isFemale = true; //boolean
var whyIsSkyBlue; //undefined
var favoriteBooks = ["To Kill A Mockingbird", "Of Mice and Men", "Things Fall Apart", "The Sunflower"]; //array

//For Loops
for(var i = 0; i <=50; i++) {
	console.log(i);
}

//If Statements
var age = 18;
if(age >= 21){
	console.log("Go ahead and celebrate with a drink!");
} else{
	console.log("Don't touch that drink!");
}

//Function That Returns Something
function multiplyNumbers (num1, num2){
	var result = num1 * num2;
	return result;
}
multiplyNumbers(3,5);

//Function That Doesn't Return Something
function redLight(){
  console.log("Stop!");
}

//Favorite Things Array
var favoriteThings =["Friday", "Writing", "Chocolate", "Technology", "Music"];
for (var i = 5; i <= favoriteThings.length; i++) {
  console.log('My #1 favorite thing is ' + favoriteThings[0]);
  console.log('My #2 favorite thing is ' + favoriteThings[1]);
  console.log('My #3 favorite thing is ' + favoriteThings[2]);
  console.log('My #4 favorite thing is ' + favoriteThings[3]);
  console.log('My #5 favorite thing is ' + favoriteThings[4]);
}

//Bonus
for(var i = 1; i <=100; i++){
	if(i % 3 === 0 && i % 5 === 0) {
		console.log("FizzBuzz");
	}else if(i % 3 ===0){
		console.log("Fizz");
	}else if(i % 5 === 0){
		console.log("Buzz");
	}else{
	  console.log(i);
	}
}
