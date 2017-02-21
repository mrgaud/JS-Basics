//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
function isTyler(name){
  return name==="Tyler"? true:false;
}
console.log(isTyler('Tyler'));
//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
function getName(){
  var name = prompt("please enter your name", "John Wick");
  return name;
}

//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
function welcome(){
    alert("Welcome, "+ getName());
  return "Welcome, "+getName();
}

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here
  //"The difference between arguments and parameters is that a parameter is passed in to a function in the declaration stage Ie: Fucntion Name(param,param).
//  where as an argument is passed to an already completed statement Ie:Name(arg,arg)";

//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
//False, 0, null, NaN, Undefined
var test = 1;
console.log(test? true:false);


//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here
function myName(){
  return "Mike";
}


//Now save the function definition of myName into a new variable called newMyName

  //Code Here
var newMyName = myName;
//Now alert the result of invoking newMyName


// alert(newMyName);


//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
function outerFn(){
  return function(){return "mike";};
}
//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
var innerFn  = outerFn();
//Now invoke innerFn.
console.log(innerFn);
