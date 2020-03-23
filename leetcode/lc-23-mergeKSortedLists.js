const {MinHeap} = require('./MinHeap.js');

//input - array of Linked Lists
function mergeLists(lists){
    const result = [];
    const heap = new MinHeap();
    //Add first element of each list in heap
    for(let p in lists){
        heap.add(p);
    }

    while(heap.size > 0){
        let minNode = heap.get();
        result.push(minNode.Val);
        minNode = minNode.next();
        if(minNode){
            heap.add(minNode);
        }
    }

    return result;
}