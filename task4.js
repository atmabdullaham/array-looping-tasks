/**
 * Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I'
 */

const statement = 'I am a hard working person'

const words = statement.split(" ");
const reverse_statement_array = [];
for(word of words){
    console.log(word);
    reverse_statement_array.unshift(word)
}

console.log(reverse_statement_array);
const reverse_statement = reverse_statement_array.join(" ");
console.log(reverse_statement);

