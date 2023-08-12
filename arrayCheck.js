// problem-3;

function sortMaker(arr){
     if((arr[0] && arr[1]) < 0){
        return 'Invalid Input';
     }else{ 
    if(arr[0] < arr[1]){
        let temp = arr[0];
        arr[0] = arr[1];
        arr[1] = temp;
       return array;
    }else if(arr[0] === arr[1]){
       return 'Equal';
    }
     }
}

let array = [2,3];
let showResult = sortMaker(array);
console.log(showResult);