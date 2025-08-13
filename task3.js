/**
 * ask 3
Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik'
 */

var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

let sum_of_array_text = ''

for(const num of numbers){
sum_of_array_text = sum_of_array_text + num
}
console.log(sum_of_array_text);