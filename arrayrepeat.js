
let arr = ["abul", "babu","kabul","babul","abul"];
function isRepeat(names){
    const unique = [];
    for(let i=0; i< names.length; i++){
        let element = names[i];
        if(unique.includes(names) === false){
            unique.push(element);
        }
    }
   return unique;

}
 
let print = isRepeat(arr);
console.log(print);