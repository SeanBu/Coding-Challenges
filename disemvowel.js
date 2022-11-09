function disemvowel(str) {
  
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const strToAry = str.split('');
    
    console.log(strToAry);
    
    for(let i = 0; i < strToAry.length; i++)
      {
        for(let j = 0; j < vowels.length; j++)
          {
            if(strToAry[i] === vowels[j])
              {
                strToAry.splice(i,1);
              }
          }
      }
    
    const noVowels = strToAry.join("");
    
    return noVowels;
  }



console.log(disemvowel("read"));