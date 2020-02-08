const { DoublyLinkedList } = require('./DoublyLinkedList.js');

function LRUCache(capacity){
    this.capacity = capacity;
    this.currentCapacity = 0;
    this.queue = new DoublyLinkedList();
    this.map = {};
}

LRUCache.prototype.put = function put(key, val){
    if(this.map[key]){
        prioritizeQueue(this.queue, key);
        this.map[key] = val;
        return;
    }

    if(this.currentCapacity === this.capacity){
        const deletedKey = this.queue.deleteFirstNode();
        delete this.map[deletedKey];
        this.currentCapacity -= 1;
    }
    this.queue.addNode(key);
    this.map[key] = val;
    this.currentCapacity += 1;
}

LRUCache.prototype.get = function get(key){
    if(this.map[key]){
        prioritizeQueue(this.queue, key);
        return this.map[key];
    }
    return -1;
}

const cache = new LRUCache(5);
cache.put(1,1);
cache.put(2,3);
cache.put(1,5);
cache.put(5,8);
cache.put(3,10);
cache.put(4,-2);
console.log(cache.get(5));
console.log(cache.get(4));
cache.put(6,3);
console.log(cache.get(2));


function prioritizeQueue(queue, key){
    let deleted = queue.deleteNode(key);
    if(deleted){
        queue.addNode(key);
    }
}