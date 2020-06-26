function FirstReverse(str) { 

    let newStr='';
    for (let i = 1; i <= str.length; i ++) {
        newStr += str[str.length-i]
    }
    
      return newStr; 
    
    }

    console.log(FirstReverse('Hello'))