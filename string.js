// reverse a string as an array

function reverseString(sentence){ 
for(let i = sentence.length-1; i>=0;i--){
    let element = sentence[i];
    console.log(element);
}
}
let str = 'the quick brown fox jumps over the lazy dog';
reverseString(str);



// reverse a string as a word

function reverse (text){
    let part = text.split(' ');
    let result = [];
    for(let i=part.length-1; i>=0; i--){ 
        let element = part[i];
        result.push(element);


       
}
console.log(result);
 }

let myString = 'I am a good boy';
reverse(myString);

// fibonacchi series

// fibo[n] = fibo[n-1] + fibo[n-2]

let fibo =[0,1];


    for(i=2; i<=13 ; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
      
    }
    console.log(fibo);