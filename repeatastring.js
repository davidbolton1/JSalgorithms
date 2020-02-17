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



// Recursion itereates over an operation by having the funciton call itself repeatedly
// A base case(Conditional clause) and recursive case (Statement where recursive functin called on itself) must exist
function repeatStringNumTimes(string, times) {
    //Step 1. Check if times is negative and return an empty string if true
    if (times < 0) {
        return "";
    }
    // Step 2. Check if times equal to 1 and return the string itself if it's the case.
    if (times === 1 ) {
        return string;
    }

    // Step 3. Use recursion
    else {
        return string + repeatStringNumTimes(string, times - 1);
    }
}

repeatStringNumTimes('abc', 3);


// Solution 3 use es6 repeat()
// repeat method constructs and returns a new string which contains the specified number of copies of teh string on which is was called, concatenated togather.
function repeatStringNumTimes(string, times) {
    // Step 1. If times is positive, return the repeated string
    if( times > 0) {
        return string.repeat(times)
    } // could also use terniary times > 0 ? string.repeat(times) : "";
    // Step 2 if times is negative return an empty string if true
    else {
        return "";
    }
}

repeatStringNumTimes('abc', 3);