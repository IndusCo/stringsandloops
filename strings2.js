function checkPali(){
    let attempts = 3
    let userInput;

    alert("This is the Palindrome Checker, you may check 3 words.")
    while(attempts>0){
        const string = prompt("Enter a word to check if it is a Palindrome");

        const stringValue = string.split('');
        console.log(stringValue);

        const reverseStringValues = stringValue.reverse('');
        console.log(reverseStringValues);

        const joinedString = reverseStringValues.join ('');
        console.log(joinedString);

        if(string == joinedString){
            attempts--
            console.log("it is a palindrome");
            alert("It is a palindrome!" + " " + attempts + " words left.");
        }
        else{
            attempts--
            console.log("It is not a palindrome");
            alert("It is NOT a palindrome!" + " " + attempts + " words left.");
        }    
    console.log(attempts + " attempts left.");
    }
}
