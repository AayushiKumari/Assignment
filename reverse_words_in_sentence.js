function reversewords(sentence) {
   
    const words = sentence.split(' ');

    const reversedWords = words.map(word => {
        return word.split('').reverse().join('');
    });

    const rev_sent = reversedWords.join(' ');

    return rev_sent;
}

const inp = prompt("Enter a sentence:");
const rev_sent = reversewords(inp);
console.log(rev_sent);
