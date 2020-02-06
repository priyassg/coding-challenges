// /**
//  * @param {number[]} height
//  * @return {number}
//  */
var maxArea = function(arr) {
  let max = 0;
  let left = 0;
  let right = arr.length - 1;
  let map = {};
  helper(left, right);

  function helper(left, right) {
    let key = `${left} : ${right}`;
    if(map[key]) return;
    if(left >= right) return;
    helper(left+1, right);
    helper(left, right-1);
    if(!map[key]){
      map[key] = Math.min(arr[left], arr[right]) * (right-left);
    }

    console.log(`left: ${left}, right: ${right}`);
  }
  console.log(map);

  return max;
};
console.log(maxArea([1, 8, 6, 2, 5]));

