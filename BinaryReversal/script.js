function BinaryReversal(str) {
    let a = +str;
    let binary = a.toString(2);
  
    let beg = "";
    if (binary.length % 8 > 4) {
      for (let i = 0; i < 8 - (binary.length % 8); i++) {
        beg += "0";
      }
    } else if (binary.length % 8 > 0 && binary.length % 8 < 5) {
      for (let i = 0; i < binary.length % 8; i++) {
        beg += "0";
      }
    }
    let fullBinary = beg + binary;
  
    let revBinary = "";
    for (let i = fullBinary.length - 1; i >= 0; i--) {
      revBinary += fullBinary[i];
    }
  
    return parseInt(revBinary, 2);
  }
     
  // keep this function call here 

  console.log(BinaryReversal('47'));