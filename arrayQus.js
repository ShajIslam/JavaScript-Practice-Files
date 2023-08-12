var fruits = ['apple', 'bannana', 'orange'];

for (var i=0; i<fruits.length;i++){
    var fruit = fruits[i];
    console.log(fruit);
}

console.log(fruits.indexOf('bannana'));

// splice method add or remove elements from any position of array

fruits.splice(1,1);

 console.log(fruits);

 fruits.splice(1,0,'mango');
/**
 * parameter:
 * 1:which index your want to add/remove
 * 2: if you don't want to delet ant elements from array just keep it 0
 * 3:which element you want to add.
 */
 console.log(fruits);

var mobileNames = ['iphone', 'sysmphony', 'realme', 'mi', 'motorola', 'nokia'];

var i=0;

while(i < mobileNames.length){
    console.log(mobileNames[i]);
    i++;
}

//shwo odd numbers from an array

var numbers = [2,3,4,5,6,7,7,8,9];

function findOddEvenNumbers(arr){
    for(i =0; i<arr.length;i++){
        if(arr[i] % 2 ==0){
            console.log('Even numbers:' , arr[i]);
        }else{
            console.log('Odd numbers:', arr[i]);
        }
    }
}

findOddEvenNumbers(numbers);




//splice method to delet
mobileNames.splice(1,2); 
console.log(mobileNames);
//first param: starting index from, second param: how much element you wants to delet

//splice method to add
mobileNames.splice(1,0,'rogue phone');
console.log(mobileNames);
//first param: from where, second: delet or not , third: add element to the pointed index (first param)


//slice method
mobileNames.slice(2);
mobileNames.slice(2,4);
console.log(mobileNames);


//find max number in an array
let arr =[12,45,65,43,23,67,89,90];

function findMax(arr){
    let max = arr[0];
    for(i=0; i<arr.length;i++){
        let element = arr[i];
        if(element > max){
            max= element;
        }
    }
    return max;
}

let maximum = findMax(arr);
console.log(maximum);

// find min number of an array

let arrayOfnumber  = [12,32,23,44,56,67,7,3,2];

function findMin(arr){
    let min = arr[0];
    for(i=0;i<arr.length;i++){
        let track = arr[i];
        if(track < min){
            min=track;
        }
    }
    return min;
}
let minimum = findMin(arrayOfnumber);
console.log(minimum);