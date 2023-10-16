function sentenceReverse(sentence) {
   
    const words = sentence.split(' ');

    
    const reversedWords = words.map(word => {
        return word.split('').reverse().join('');
    });

   
    const reverseString = reversedWords.join(' ');

    return reverseString;
}

const string = "This is a sunny day";
const reverseString = sentenceReverse(string);
console.log(reverseString);
