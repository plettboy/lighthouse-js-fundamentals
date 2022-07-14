const whichSchool = function (age) {

  if (age < 13) {
    //If age is below 13, then it is Elementary School. 
    return "Elementary School";
  } else if (age >= 13 && age <= 18) {
   //If age is in bewteen 13 and 18 (both inclusively), then it is Secondary School.
    return "Secondary School";
  } else {
    //All other age groups are Lighthouse Labs.
    return "Lighthouse Labs";
  }
 }
 
 console.log("I am 35. Which school should I go to?");
 console.log(whichSchool(35));
 console.log("I am 8. Which school should I go to?");
 console.log(whichSchool(8));
 console.log("I am 14. Which school should I go to?");
 console.log(whichSchool(14));