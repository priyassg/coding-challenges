function mergeSort(arr){
    if(arr.length <= 1) return arr;

    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid, arr.length);
    
    let l = mergeSort(left);
    let r = mergeSort(right);

    return merge(l, r);
}

function merge(left, right){
    let l = 0;
    let r = 0;
    const result = [];

    while(left[l] && right[r]){
        if(left[l] < right[r]){
            result.push(left[l]);
            l += 1;
        }else {
            result.push(right[r]);
            r += 1;
        }
    }

    while(left[l]){
        result.push(left[l]);
        l += 1;
    }
    while(right[r]){
        result.push(right[r]);
        r += 1;
    }
    return result;
}

console.log(mergeSort([2,8,5,3,9,4,1,7]));
console.log(mergeSort([]));
console.log(mergeSort([1]));
console.log(mergeSort([100, 99]));
console.log(mergeSort([100, 99, 97]));
console.log(mergeSort([100, 99, 97, 64,92,74,10, 99,100,64]));
console.log(mergeSort([84,8,2,-1,-64,93,2]));