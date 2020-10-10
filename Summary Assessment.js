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
