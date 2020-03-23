// Without using .flat(), create a function to flatten an array

// const exampleArray = [1,2,[3,4, [5,6,7], 8], 9, 10];
// flatten(exampleArray); // [1,2,3,4,5,6,7,8,9,10]

const exampleArray = [1,2,[3,4, [5,6,7], 8], 9, 10];
console.log(flatten(exampleArray)); // [1,2,3,4,5,6,7,8,9,10]
console.log(flatten2(exampleArray));// [1,2,3,4,5,6,7,8,9,10]
console.log(flatten3(exampleArray));// [1,2,3,4,5,6,7,8,9,10]

//Using helper function
function flatten(arr){
  let result = [];
  helper(arr, result);
  
  return result;
}

function helper(arr, result){
  if(!(Array.isArray(arr))){
    result.push(arr);
    return
  }
  
  arr.forEach(el => {
    helper(el, result);
  })
}

// Without helper function 
function flatten2(arr){
  const result = [];
  if(!Array.isArray(arr)){
    result.push(arr);
    return result;
  }
  
  for(let i=0; i< arr.length; i++){
    let output = flatten2(arr[i])
    result.push(...output);
  }
  
  return result;
}

//Using Array.reduce
function flatten3(arr){
  
  return arr.reduce(function(acc, item){
    if(Array.isArray(item)){
      acc.push(...flatten3(item));
    }else{
      acc.push(item)
    }
    return acc;
  },[])
}