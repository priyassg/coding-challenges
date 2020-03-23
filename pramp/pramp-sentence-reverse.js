function reverseWords(arr) {
    let words = [];
    let str = '';
    
    for(let i=0; i<arr.length; i++){
      if(arr[i] === ' '){
        if(str.length > 0){
          words.push(str);
        }
        str = '';
        words.push(' ');
      }else {
        str = str + arr[i];
      }
    }
    
    if(str.length > 0){
      words.push(str);
    }
    
    //word = [" ", " "]; i: [" "," "]
    //word= ['perfrect',' ', 'makes',' ', 'practice'];
    const result = [];
    for(let i= words.length -1; i>=0; i--){
      let char = words[i];
      for(let j=0;j<char.length; j++){
        result.push(char[j]);
      }
      //if(i !== 0) result.push(' ');
    }
    
    return result;
  }
  
  //array : ['practice', 'makes', 'perfect'];
  // O(n)
  //space: O(n)
  
  /*
    input : [ 'p', 'e', 'r', '  ',
                  'm', '  ',
                  'p' ]
                  
                  word: ['per', 'm', 'p']
                  
                  result: ['p', ' ','m', ' ', 'p','e','r'];
  
  */


//  ask : Shortest Word Edit Path