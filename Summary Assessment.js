// Remember to relax and ask for help when you need it (only from staff)
// YOU CAN ONLY USE MDN AS A RESOURCE for JavaScript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript
// you can use W3school for HTML-CSS
// for the jquery you can only use jquery documentaion.
// https://api.jquery.com
// NOTE: you are accountable for your styling, so make sure your styling is good.
// ANOTHER NOTE:leave comments about your intent or pseudo-code describing your plan.

// Use the following helper functions in your solution

function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function (element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function (element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

function reduce(array, f, acc) {
  if (acc === undefined) {
    acc = array[0];
    array = array.slice(1);
  }
  each(array, function (element, i) {
    acc = f(acc, element, i);
  });
  return acc;
}

//=============================================================================
/*                                  Q1                                    */
//=============================================================================
// Write a function called addID that takes an object and an id code",
//and returns a new object with an added `id` property to it. The `id`'s value will be the id code.
// Things to consider:
// * If no id code is given, assign n/n as the property's value.
// * If the id code is not a number, returns Invalid id.
// addID({name : "Barbra Karst"},4567); // {name :"Barbra Karst", id: 4567}
// addID({a : 1}); // {a : 1, id: 'n/n'}
// addID({c : 2}, 'ABC'); // "Invalid code"

// TODO: your code here

function addID(object, code) {
  //check all case of code
  //in case code is not defined
  if (code === undefined) {
    object.id = "n/n"
 //in case code isnot a number
  }else if (typeof code !== 'number' ) {
    object.id = "Invalid code"
  //in case code is a number
  } else 
  {
    object.id = code
  }
  return object;
}

//=============================================================================
/*                                  Q2                                    */
//=============================================================================
// Write a function called allHaveLastNames that takes an array of names (strings) as input,
//and returns true if all names in the array have a last name, and false if not.
//solve it using the most appropriate helper functions(reduce,each,map,filter).
//var Folks = ["Sierra Heimbach", "Angelica Storms",   "Lampton",  "Hampshire"];
//var FollkWithLast =  ["Sierra Heimbach", "Angelica Storms", "Doretta Linen"];
// AllHaveLastNames(Folks); //false
// AllHaveLastNames(FollkWithLast); //true

// TODO: your code here
function allHaveLastNames(names) {
  return reduce(names, function(acc, name, i) {
     return acc && name.indexOf(" ") > -1 // OR return acc && name.includes(" ")    
  })
}

  
//=============================================================================
/*                                  Q3                                        */
//=============================================================================
// Write a function called coinFlip that randomly returns either "heads" or "tails".
// Each outcome should have an equal chance of happening.
//Hint: Math.random()
// TODO: your code here

function coinFlip() {
  //we will use the Math.random to give us the posibility of heads or tails
  //wich is fixed for both (0.5)
    x = Math.random();
    if (x < 0.5) {
      return "heads"
    } else {
      return "tails"
    }   
}


//=============================================================================
/*                              Q4                                           */
//=============================================================================
// Write a function called assignStudnetID that takes an array of students’ names, a starting number,
//and an optional 3rd argument. This function should return a new array of objects,
//each with a `name` property (students’ name), and an `id` property.
// Each student should get an ID code starting from `11000`,and increment by the optional 3rd parameter.

// Things to consider:
//  If a 3rd argument is not provided, increment by 1 for each student.
// var students = ["Aleen Y. Atkins", "Alvaro L. Angelos", "Denese Dossett", "Douglas Denney"];

// var firstArray = assignStudnetID(students, 11000);
// var secondArray = assignStudnetID(students, 11000, 12);

// firstArray[0]; // {name: 'Aleen Y. Atkins', id: 11000};
// firstArray[1]; // {name: 'Alvaro L. Angelos', id: 11001};

// secondArray[0]; // {name: 'Aleen Y. Atkins', id: 11000};
// secondArray[1]; // {name: 'Alvaro L. Angelos', id: 11012};
// secondArray[2]; // {name: 'Denese Dossett', id: 11024};

// TODO: your code here

function assignStudnetID(names, number, arg ){
  //declare a new empty array to return results
  //declare a new empty object
  var arr =[];
  var object;
  if (arg === undefined) {
    arg = 1;
  } 
  for (var i = 0; i < names.length; i++) { 
    //the new object will be declared each iteration over the array
    object = {name: "", id: 0}; //object was declared inside loop to avoid getting the last array value only
    object.name = names[i];
    //check i value to start from the given number 
    if (i === 0) {
      number = number
      //increase number by arg each iteration
    } else {
      number = number + arg;
    }
    object.id = number;
    // console.log(object);
    arr.push(object)
  }
  return arr;
}

//=============================================================================
/*                                  Q5                                         */
//=============================================================================
//Write a function called lastNElements that takes two Parameters as an input,  an array of numbers  and a number n,
// and returns a new array with the last n elements only.
//solve it using one of the most appropriate helperthe helpers functions(each,map,filter).
// lastNElements( [1,2,3,4],2 ) ==> [3,4]
// lastNElements( [9,2,3,4,6],1) ==> [6]
// lastNElements( [], 3 ) ==> []
// lastNElements( [5,6,8,9,12], 9 ) ==> [5,6,8,9,12]

function lastNElements(array, n) {
  return filter(array, function(element, i) {
   return  i >= array.length-n
  })
}
//=============================================================================
/*                                  Q6                                        */
//=============================================================================
//Write a function called replaceDigit that takes a string as input and returns new string
//after replace first digit in the string (should contains at least digit) with & character.
//replaceDigit("abc1dabc") ==> abc&dabc
//replaceDigit("p3ython") ==> p&ython

function replaceDigit(string) {
  var str =string.split("")
  var att = "0123456789"
  each(str, function(element, i) {
  if(att.match(element)) {
    str[i] = "&"
  } 
 })
  return str.join("");
}
//=============================================================================
/*                                  Q7                                       */
//=============================================================================
//Using recursion, write a function called arraySum that takes an array of numbers as parameter
// and returns the sum of all numbers in the array except the last one.
// arraySum([1, 2, 3, 4, 5, 6]) ==> 15
// arraySum([1, 2, 4]) ==>   3

function arraySum(array, i) {
    i = i || 0;
    if (i === array.length-1) {
        return 0;
    } else {
        return array[i] + arraySum(array, i + 1);
    }
}

//=============================================================================
/*                                  Q8                                   */
//=============================================================================
//Depending on data modeling concept that you have learned:
// create a factory function called makeProfile that return object  has the following properties:
//  "name" with a string value
//  "age" with a number value
//  "knowsJavascript" with a boolean value
//  "pets" with an array value


function makeProfile(name, age, knowsJavascript, pets) {
  return {
    name: name,
    age: age,
    knowsJavascript: true,
    pets: pets
  }
}

// write function displayProfile that can be used to display one profile.
// write function displayProfilePets that can be used to display all the elements inside pets array.
// myProfile =  {
// name : "Sahar",
// age : 30,
// knowsJavascript :true,
// pets : ["Pandacat", "SashaGoat"]
// };

// displayProfile (myProfile) ===>   name : "Sahar"
//                                   age : 30
//                                   knowsJavascript :true
//                                   pets : ["Pandacat"]

//  displayProfilePets (myProfile)  ===> Pandacat,SashaGoat

var myProfile = makeProfile("Sahar", 30, true, ["Pandacat","SashaGoat"])
function displayProfile(argument) {
for(var key in argument) {
 return "name : " + argument.name + "\n" + "age : "+argument.age + "\n" + "knowsJavascript : "+ argument.knowsJavascript+"\n"+"pets : "+argument.pets
   }
}

function displayProfilePets(argument) {
    var result = argument.pets;
    var display = result[0];
    for(var i = 1; i < result.length; i++) {
     display =  display+","+result[i] 
    }
    return display;
}

//=============================================================================
/*                                  Q9                                     */
//=============================================================================
/*
  Create a ReadingList class by using OOP concept, where:
  Your class should has:
  "read" for the number of books that finish reading
  "unRead" for the number of books that still not read
  "toRead" array for the books names that want to read in the future
  "currentRead" for the name of the book that is reading currently
  "readBooks" Array of the names of books that finish read
  "AddBook" function that:
  a- Accept the book name as parameter
  b- Add the new book to "toRead" array
  c- Increment the number of the unread books.
  "finishCurrentBook" function that:
  a- Add the "currentRead" to the "readBooks" array
  b- Increment the "read" books
  c- Change the "currentRead" to be the first book from "toRead" array
  d- Decrement the number of "unread" books
  */

// Now, to make sure that you are actually reading, make a comment below this and type: Yes I am

//yes I am

// Write your code here .....
function ReadingList() {
  var obj ={};

  obj.read = 0;
  obj.unread= 0;
  obj.toread= [];
  obj.currentread= "";
  obj.readBooks= [];
  obj.AddBook= AddBook;
  obj.finishCurrentBook= finishCurrentBook;
  return obj;
}

var AddBook = function (book){
  this.toread.push(book)
  this.unread = this.unread + 1
}

var finishCurrentBook= function (){
  this.readBooks= this.readBooks.push(this.currentread);
  this.read = this.read + 1;
  this.currentread = this.toread[0];
  this.unread = this.unread - 1;
}