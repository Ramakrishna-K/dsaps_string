
// palindrome using the reverse method and split

// let name = "madam";
// let reversed = name.split("").reverse().join("")
// if(name == reversed){
//     console.log(reversed +" palindrome");
// }else{
//     console.log(reversed + " not palindrome")
// }

function checkPalindrome(str){
    let reversed = str.split("").reverse().join("");
    return str == reversed ? str + " palindrome" : str + " not palindrome"
}
console.log(checkPalindrome("maddram"))

// using the loop 

function checkPalindrome(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return str === reversed;
}

console.log(checkPalindrome("racecar"));


//  usint the recursion 

function palindrome(str) {
    if (str.length <= 1) {
        return true;
    }

    if (str[0] !== str[str.length - 1]) {
        return false;
    }

    return palindrome(str.slice(1, -1));
}

console.log(palindrome("madam"));