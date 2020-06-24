function LetterChanges(str) { 

    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const vowels = ['a','e','i','o','u'];
    let string = str.toLowerCase();
    let result='';
    for(let i = 0; i < string.length; i++) {
        let index = alphabet.indexOf(string[i]);
        if (index> -1){
            let letter = alphabet[index+1]
            if (letter === undefined) {
                letter = alphabet[0];
            } else { letter = letter };
            
            if (vowels.indexOf(letter)>-1) {
                result += letter.toUpperCase();
            } else {
                result += letter;
            }
        } else {
            result += string[i];
        }
    }
    
  return result;
  }
     
  // keep this function call here 
console.log(LetterChanges('Hezllo*3'));
console.log(LetterChanges('fun times'));