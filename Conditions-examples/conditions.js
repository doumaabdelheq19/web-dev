//------if ... else statment

var i=1;
var j=2;
if (i>j) {
    console.log("i greter than j")
} else {
    console.log("j greater than i") 
}


//------Logical Operators

// And && //
// you will pass the year if you got more than 11 in math and more than 12 in chimestry 
var math="10";
var Chimestry="12";
if (math >= "11" && Chimestry >= "12" ) {
    console.log("Congratilation , you have been passed the year")
} else {
    console.log("you have been failed ") 
}


// OR || //
// you will pass the year if you got more than 11 in math Or more than  12 in chimestry 
var math="10";
var Chimestry="10";
if (math >= "11" || Chimestry >= "12" ) {
    console.log("Congratilation , you have been passed the year")
} else {
    console.log("you have been failed ") 
}


// Not ! //
// You will be excluded if you got 0 in any module 
var math="10";
var Chimestry="10";
if (math != "0" && Chimestry != "0" ) {
    console.log("Congratilation , you will not be excluded")
} else {
    console.log("you have been excluded ") 
}

//--------Ternary operator
var i=1;
var j=2;
i>j ? (console.log("i greter than j") ) : (console.log("j greater than i")) ;


//--------Switch Statement
// This example uses the weekday number to calculate the weekday name  (Sunday=1,monday=2,Tuesday=3......)
 var day ;
var number="7";
switch (number) {
    case "1":
     day = "Sunday";
      break;
    case "2":
      day = "Monday";
      break;
    case "3":
       day = "Tuesday";
      break;
    case "4":
      day = "Wednesday";
      break;
    case "5":
      day = "Thursday";
      break;
    case "6":
      day = "Friday";
      break;
    case "7":
      day = "Saturday";
  }
  console.log(day);
