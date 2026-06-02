
// //  reverse a string using the splite method
// let text = "Ramakrishna";

// let reversed = text.split("").reverse().join("")

// console.log(reversed)


// //  reverse a string using the loop

// let name = "Kirthana";

// let reversed = "";

// for(let i = name.length-1; i >=0; i--){
//     reversed += text[i]
// }
// console.log(reversed)

// // reverse a string using for but not using reverse word

// let name1 = "prasana";
// let result =  "";
// for(let char of name1){
//     result = char + result

// }
// console.log(result)

// // uesing the recusion fuction

// function reverseString(str) {
//     if (str === "") {
//         return "";
//     }

//     return reverseString(str.substr(1)) + str[0];
// }

// console.log(reverseString("hello"));


// // Using Stack Logic

// let text = "hello";
// let stack = [];

// // Push characters into stack
// for (let char of text) {
//     stack.push(char);
// }

// let reversed = "";

// // Pop characters from stack
// while (stack.length > 0) {
//     reversed += stack.pop();
// }

// console.log(reversed);
