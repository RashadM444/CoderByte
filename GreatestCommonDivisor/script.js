function findDivisors (a) {
    let divisors = [1];
    while(a > 1) {
       let array = [];
        let divisor;
        for (let i = 2; i<=9; i++) {
            if(a%i === 0) {
                array.push(i);
            }
             divisor = Math.min(...array);
        }
        divisors.push(divisor);
        a = a/ divisor;
        
       
        
    }
    return divisors;

}


function findGCD(a,b) {

let arr1 = findDivisors(a);
let arr2 = findDivisors(b);
let commonDivisors =[];
if (arr1 > arr2) {
    let aRR1 = arr2;
    let aRR2 = arr1;
    arr1 = aRR1;
    arr2 = aRR2;
}
    for (let i = 0; i<arr1.length; i++) {
        let arr2index = arr2.indexOf(arr1[i]);
        if (arr2index > -1) {
            commonDivisors.push(arr1[i]);
            arr2.splice(arr2index, 1);
        }
    }

    let result = 1;
    commonDivisors.forEach(e => result *= e);

   return result;
}

console.log(findGCD(120,90));

