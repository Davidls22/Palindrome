//get the input to check
let palindrome = prompt("please enter your word here")
//to access start of word
let index = 0
fullWord = palindrome.length

while (index <= fullWord){
    // checking if first and last word match
    if (palindrome[index] !== palindrome[fullWord - 1]){
        alert(`${palindrome} is not a palindrome`)
        break;
    }
// keeps going along chain of index for each iteration of while loop
index++
alert(`${palindrome} is a palindrome`)
    break;
}

