function calcAverage(ct, attendence, assignment1, assignment2, mid, final){
    var average = (ct+attendence+assignment1+assignment2+mid+final)/6;
    return average;
}


var result = calcAverage(18, 5, 10,10,28,39);
console.log(result.toFixed(2));


function test(){
    return 'shaj';
    return 'sid';
    return 'baccha';
}
test();


//practice task 1

function foo(){
    console.log('foo');
    bar();
}
function bar (){
    console.log('bar');
}
foo();

//problem 3, show array items with loop
var size=3;
 var arr = [1,4,5];

 function print(x,n){
    for(i =0; i<n; i++){
        console.log(x[i]);
    }
 }

 print(arr, size);

 //odd_even check

function odd_even(number){
    if(number % 2 == 0){
        console.log('The Number is even');
    }else{
        console.log('The number is odd');
    }
}

odd_even(3);
odd_even(4);

//traffic signal problem 4, using swith case

var color = 'red';

switch(color){
    case 'red':
        console.log('Dont cross the road! Red signal!');
        break;
        case 'yellow': console.log('Stop! yellow signal!');
        break;
        case 'green': console.log('you can cross the road! Green signla');
}

