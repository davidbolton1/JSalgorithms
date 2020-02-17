// Repeat a given stringnum strings. Return an empty string if num is not a positive number

//repeatStringNumTimes('*', 3) shold return '***'



// #1 while loop while(condition) statement, with a condition which is evaulated before each pass through the loop


function repeatStringNumTimes(string, times) {
// Create an empty string to host the repeated string
var repeatedString = "";
//Step 2, set the while loop with (times > 0) as the condition to check
while (times > 0) { //as long as times is greater than 0, statement is executed
    repeatedString += string; // repeatedString = repeatedString + string;
    times-- ;
}

// Step 3 return the repeated String
return repeatedString;
}

repeatStringNumTimes('abc', 3);