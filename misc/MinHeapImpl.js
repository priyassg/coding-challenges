class MinHeap{
    constructor(){
        this.capacity = 20;
        this.arr = [];
        this.size = 0;
    }

    peek(){
        if(this.arr.length > 0) return this.arr[0];
    }

    pop(){
        if(!this.arr.length) return;
        const min = this.arr[0];
        this.arr[0] = this.arr[this.size - 1];
        this.size -= 1;
        heapifyDown(this.arr, 0, this.size);
        return min;
    }

    add(val){
        //check capacity
        this.arr = checkCapacity(this.size, this.capacity, this.arr);
        let addAtIndex = this.size;
        this.arr[addAtIndex] = val;
        let parentIndex = getParentIndex(addAtIndex);
        this.size +=1;
        heapifyUp(this.arr, parentIndex, this.size);
    }
}

function getLeftChildIndex(parentIndex){
    return 2*parentIndex + 1
}

function getRightChildIndex(parentIndex){
    return 2*parentIndex + 2
}

function getParentIndex(childIndex){
    return Math.floor((index-1)/2);
}

function parent(arr, childIndex){
    const parentIndex = getParentIndex(childIndex);
    return arr[parentIndex];
}

function swap(arr, index1, index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function heapifyUp(arr, size){
    let index = size -1;
    while(hasParent(index) && parent(index) > arr[index]){
        swap(arr, index, getParentIndex(index));
        index = getParentIndex(index);
    }
}

function heapifyDown(arr, index, size){
    if(index >= size) return;

    let leftIndex = getLeftChildIndex(index);
    let rightIndex = getRightChildIndex(index);

    if(arr[index] > Math.min(arr[leftIndex], arr[rightIndex]))

    let minIndex  = leftIndex;
    if(arr[minIndex] > arr[rightIndex]) minIndex = rightIndex;

    //swap min and index;
    swap(arr, index, minIndex);
    heapifyDown(arr, minIndex, size);
    
}

function checkCapacity(size, capacity, array){
    if(size < capacity) return array;
    let newarray =  new Array(capacity*2);
    let i =0;

    while(arr[i]){
        newarray[i] = arr[i];
        i +=1;
    }

}