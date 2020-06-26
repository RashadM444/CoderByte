function LongestWord(sen) { 
    let array = sen.split(' ');
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
    let charArray= [];
    for (let i = 0; i < array.length; i++) {
        let charNum = 0;
        for (let t = 0; t < array[i].length; t++) {
            if (alphabet.indexOf(array[i][t]) > -1){
                charNum += 1;
            } else {
                charNum +=0;
            }
        }
        charArray.push(charNum);
    }
    

    return array[charArray.indexOf(Math.max(...charArray))];
  
  }

  console.log(LongestWord('Hel232lo world'));  
