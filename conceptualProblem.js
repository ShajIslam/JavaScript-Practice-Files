// take a file name in the function, find is the file exits or not

let files = 'html css text js';

function isJsFileExists(filename){
    if(typeof filename !== 'string'){
        console.log('Input a valid string');

    }else{
        let part = filename.split(' ');
        let lastFile = part.pop();
        if(lastFile.toLocaleLowerCase() === 'js'){
            return true;
        }else{
            return false;
        }
    }
}

console.log(isJsFileExists(files));

// take a positive integer, and positive integer should multiplied by 3, then add 10,
// then divide by 2 and last substitute by 5;

function mindGame(input){
    if(typeof input !== "number"){
        console.log("Please enter valid number");
    }else if(input <=0){
        console.log('Please Enter a positive number');
    }else{
        let result = (((input*3)+10)/2) - 5;
        return result;
    }
}

console.log(mindGame(6));

// write a function, it takes a number if the number is less than 7 then substitute with
// 7 and if the number is greater than 7 then return double of the input

function isLGSeven(input){
    if(typeof input !== "number"){
        console.log('please enter a valid number');
    }else{
        let result = input - 7;
        if(result < 7){  
            return result;
        }else{
            return input*2;
        }
        
    }
}

console.log(isLGSeven(6));

// write a function that takes an array of numbers(positive, negetive), if numbers
// is negetive that count it as a bad data and return


function findBadData(arr){
    if(!Array.isArray(arr)){
        console.log("Please input an valid number array!!");
    }else{
        let badDataCount = 0;
        for(let i=0; i<arr.length;i++){
            if(typeof arr[i] !== 'number'){
                return 'provide array of numbers';
            }else{
                if(arr[i] < 0){
                    badDataCount++;
                }
            }
        }
        return badDataCount; 
    }
}

let inputes = [1,5 ,-6, -6, -5,-8];
console.log(findBadData(inputes));

// gems to diamond problem

function gemsToDiamont(gems1, gems2, gems3){
    const gems1Power = 21;
    const gems2Power = 32;
    const gems3Power = 43;

    const convertIntoDiamond1 = gems1 * 21;
    const convertIntoDiamond2 = gems2 * 32;
    const convertIntoDiamond3 = gems3 * 43;

    let totalDiamond =0;
    totalDiamond= convertIntoDiamond1 + convertIntoDiamond2 + convertIntoDiamond3;
    if(totalDiamond >1000 * 2){
        let remainning = totalDiamond - 2000;
        return remainning;
    }

}

console.log(gemsToDiamont(100,5,1));

// write a function, that takes an object, prints the object property
// note: if any of object property is missing then print 'nai'

function printDetails(obj){
    if(typeof obj !== 'object'){
        console.log('Input a valid object');
    }else{
        const name = obj.name || 'nai';
        const age = obj.age || 'nai';
        const email = obj.email || 'nai';
        const bou = obj.bou || 'nai';

       console.log("My name is:" +name+ '\n' + 'Age:' + age+ '\n' +'Email:' +email+'\n'+'Amar bou:' + bou);
    }
}

const obj = {
    name: 'shaj',
    age: 23,
    email: 'shaj5@outlook.com'
}
printDetails(obj);

// write a function that takes a photname, and extension array. check the photo name
// and extension is valid or not, if valid return true neither return false.

function isValidPhotoName(photoName, imageExtension){
    if(typeof photoName !== 'string' || !Array.isArray(imageExtension)){
        console.log('please enter a valid input');
    }else{
        for(let items of imageExtension){ 
        if(photoName.toLocaleLowerCase().endsWith(items.toLocaleLowerCase())){
            return true;
        }
    }
    return false;
     
     }
}
let fileName = 'image.png';
let extensions = ['jpg', 'png', 'svg', 'pdf', 'jpeg'];

console.log(isValidPhotoName(fileName, extensions));