function insertionSort(arr){
    for(let i=0; i<arr.length-1;i++){
        let p = i+1;

        while(p>0 && arr[p-1] > arr[p]){
            let temp = arr[p-1];
            arr[p-1] = arr[p];
            arr[p] = temp;
            p -= 1;
        }
    }
}

const arr = [3,2,5,8,6,4];
insertionSort(arr);
console.log(arr); //[2,3,4,5,6,8]


//Not correct - need to fix