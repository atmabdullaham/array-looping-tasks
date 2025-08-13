/**
 * Task 1
Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red']
 */

const colors = ['red', 'blue', 'green', 'yellow', 'orange']


// system 1
const reverse = []
for(color of colors){
reverse.unshift(color)
}
console.log(reverse);

// system 2
const reverse1 = [];
for(let i = 0; i<colors.length; i++){
    reverse1.unshift(colors[i])
}
console.log(reverse1);


// system 3
const reverse3 = []
for(let i = colors.length-1; i>=0; i--){
    reverse3.push(colors[i])
}
console.log(reverse3);
console.log(colors);


// system 4
const reverse4 = colors.reverse() // this methods change the acctual array
console.log(reverse4);
console.log(colors);
