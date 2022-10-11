function stringHandsOn() {
    console.log(`==================Q1==================`);
    var stringA = `   Hey You are doing good, keep it up    `;
    console.log(stringA);
    console.log(`==================Q2==================`);
    console.log(`Length of given string is :-`, stringA.length);
    console.log(`==================Q3==================`);
    console.log(`Result after removing leading & tailing extra spaces :-`, stringA.trim(stringA));
    console.log(`==================Q4==================`);
    console.log(`String length after removing extra spaces is :-`, stringA.trim(stringA).length);
    console.log(`Total number of spaces removed :-`, 41-34);
    console.log(`==================Q5==================`);
    console.log(`First and last character on same line after removing spaces :-`, stringA.trim(stringA).charAt(0), (stringA.trim(stringA)).charAt(stringA.trim(stringA).length-1));
    console.log(`==================Q6==================`);
    console.log(`Total words available in string after removing spaces :-`, ((stringA.trim(stringA)).split(" ")).length);
    console.log(`==================Q7==================`);
    console.log(`Index of "good" from the given string is :-`, stringA.indexOf("good"));
    console.log(`==================Q8==================`);
    console.log(`In given string, Substring starting form index 22 by using substring() :- `, stringA.substring(22));
    console.log(`After spaces removed, Substring starting form index 22 by using substring() :- `, (stringA.trim(stringA)).substring(22));
    console.log(`In given string, Substring starting form index 22 by using slice() :- `, stringA.slice(22));
    console.log(`After spaces removed, Substring starting form index 22 by using slice() :- `, (stringA.trim(stringA)).slice(22));
    console.log(`==================Q9==================`);
    console.log(`Is string ending with "up" after removing spaces :-`, (stringA.trim(stringA)).endsWith("up"));
    console.log(`==================Q10==================`);
    console.log(`Is string start with "Hey" after removing spaces :-`, (stringA.trim(stringA)).startsWith("Hey"));
    
}
stringHandsOn()