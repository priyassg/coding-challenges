//Using Heap sorted in a array
//Stores value and weight; Priority based on weigth;

class PriorityQueue{
    constructor(capacity = 20){
        this.capacity = capacity;
        this.arr = new Array(capacity);
        this.size = 0;
    }

    push(value, weight){
        this.arr[this.size] = [value, weight];
        this.size += 1;
        reprioritizeUp(this.arr, this.size);
    }

    peek(){
        if(this.size){
            return this.arr[0];
        }
    }

    pop(){
        if(this.size < 1) return;

        const result = this.arr[0];
        this.arr[0] = this.arr[this.size - 1];
        this.size -= 1;
        prioritizeDown(this.arr, this.size);
        return result;
    }
}


let pq = new PriorityQueue();
pq.push(1,4); //value, weight
pq.push(2,5)
pq.push(3,1);
pq.push(17, 100);
pq.push(9,2);
pq.push(0, 10);
pq.push(6, 13);
pq.push(20, 21);

for(let i = 0; i< pq.size;i++){
    console.log(pq.arr[i]);
}

console.log('--------');
console.log(pq.size);
console.log('--------');

while(pq.size){
    console.log(pq.pop());
}

function getParentIndex(childIndex){
    return Math.floor((childIndex -1)/2);
}
function getLeftIndex(parentIndex){
    return 2*parentIndex + 1;
}
function getRightIndex(parentIndex){
    return 2*parentIndex + 2
}

function reprioritizeUp(arr, size){
    let parentIndex = getParentIndex(size-1);
    let childIndex = size-1;
    while(arr[parentIndex]){
        if(arr[parentIndex][1] < arr[childIndex][1]){
            swap(parentIndex, childIndex, arr);
        }
        childIndex = parentIndex;
        parentIndex = getParentIndex(childIndex);
    }
}

function prioritizeDown(arr, size){
    let parentIndex = 0;
    let maxIndex;
    let leftIndex = getLeftIndex(0);
    let rightIndex = getRightIndex(0);
    console.log({size, parentIndex:arr[parentIndex][1], leftIndex: arr[leftIndex][1], rightIndex: arr[rightIndex][1]});

    while(leftIndex < size && rightIndex < size){
        if(arr[leftIndex] && arr[rightIndex]){
            maxIndex = arr[leftIndex][1] > arr[rightIndex][1] ? leftIndex : rightIndex;
        }else if(arr[leftIndex]){
            console.log(' in first If');
            maxIndex = leftIndex
        }else{
            console.log(' in second If');
            maxIndex = rightIndex;
        }
    
        if(arr[parentIndex][1] < arr[maxIndex][1]){
            swap(parentIndex, maxIndex, arr);
            parentIndex = maxIndex;
            leftIndex = getLeftIndex(parentIndex);
            rightIndex = getRightIndex(parentIndex);
        }else{
            break;
        }
    }

}

function swap(parentIndex, childIndex, arr){
    let temp = arr[parentIndex];
    arr[parentIndex] = arr[childIndex];
    arr[childIndex] = temp;
}