var calcFactoroal =1;

function factorial(number){
    for(i=1; i<=number;i++){
       calcFactoroal*=i;
    }
    return calcFactoroal;
}

var result = factorial(10);
console.log(result);