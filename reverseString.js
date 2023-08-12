// reverse a string to a sentence


let sentence = 'I am a good boy';

function reverseString(sentence){
    let part = sentence.split(' ');
    let arr = [];
    let arrayToString;
    for(let i=part.length-1; i>=0;i--){
         let wordsInSentence = part[i];
        arr.push(wordsInSentence);
        arrayToString = arr.join(' ');
        
        
    }
    console.log(arr);
    console.log(arrayToString);
  


    
}

reverseString(sentence);