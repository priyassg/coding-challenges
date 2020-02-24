// /**
//  * @param {number[]} height
//  * @return {number}
//  */
var maxArea = function(arr) {
  let len = arr.length;
  let left = 0;
  let right = len-1;
  let maxArea = 0;
  
  while(left < right){
      let newArea = Math.min(arr[left], arr[right]) * (right - left);
      if(newArea > maxArea) maxArea = newArea;
        if(arr[left] < arr[right]){
            left += 1;
        }else{
            right = right -1;
        }
  }
  return maxArea;
};

