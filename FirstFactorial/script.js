function FirstFactorial(num) { 
   
   for(let i = num -1 ; i >= 1; i--) {
       num *=i;
   }
  
   return num;
  }

  console.log(FirstFactorial(5))