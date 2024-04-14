const string = prompt("Enter a word.");

function checkPali(string){
    const stringValue = string.split('');
    console.log(stringValue);

    const reverseStringValues = stringValue.reverse();
    console.log(reverseStringValues);

    const joinedString = reverseStringValues.join ('');
    console.log(joinedString);

    if(string == joinedString){
        console.log("it is a palindrome");
        alert("It is a palindrome!");
    }
    else{
        console.log("It is not a palindrome");
        alert("It is NOT a palindrome!");
    }
}

checkPali(string)

function checkWord(word){
    const wordValue = word.split('');
    console.log(wordValue);

    const reverseWordValues = wordValue.reverse();
    console.log(reverseWordValues);

    const joinedWord = reverseWordValues.join ('');
    console.log(joinedWord);

    if(word == joinedWord){
        console.log("it is a palindrome");
        document.getElementById('wordForm').submit();
    }
    else{
        console.log("It is not a palindrome");
        document.getElementById('wordForm').submit();
    }
}
