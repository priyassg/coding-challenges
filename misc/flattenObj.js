function flattenObject(obj){
  
    let result = {};
    helper(null,obj, result);
    return result;
    
  }
  
  function helper(key, obj, result){
    if(typeof obj !== 'object'){
      result[key] = obj;
      return;
    }
    
    for(let [k, val] of Object.entries(obj)){
      if(key){
        helper(`${key}.${k}`, val, result);
      }else{
        helper(`${k}`, val, result);
      }
    }
  }

  var obj = {"a" : 1,
           "b" : {
             "c" : {
               "f" :9,
             },
             "d" : 3,
             "e" : {
               "f" :9,
             }
           }
          }

console.log(flattenObject(obj)); //{ a: 1, 'b.c.f': 9, 'b.d': 3, 'b.e.f': 9 }