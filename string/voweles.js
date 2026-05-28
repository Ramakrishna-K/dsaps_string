//  voweles using the loops

let name = "Ramakrishan";

let count = 0;

let voweles = "aeiouAEIOU";

for(let i=0; i < name.length;i++){
    if(voweles.includes(name[i])){
        count ++
    }
}
console.log(count)

// Using Regular Expression and ternary operator
let name = "hello";

let match = name.match(/[aieou]/gi);
let result = match ? match.length:0;
console.log(result)

// Using Regular Expression and ternary operator
let name = "rythbgjfklmvcdsw"

let match = name.match(/[aieou]/gi);
if(match){
     console.log(match.length);
}else{
    console.log(0)
}

//  using the regular expression in function 

function countVoweles(str){
    let match  = str.match(/[aieou]/gi);
     return  match ? match.length:0;
}
console.log(countVoweles("hello"))

// filter method in function 
function countVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    return str
        .toLowerCase()
        .split('')
        .filter(char => vowels.includes(char))
        .length;
}

console.log(countVowels("JavaScript"));