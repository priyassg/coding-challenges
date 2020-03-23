function ListNode(val){
    this.val = val;
    this.next = null;
    this.prev = null;
}


function DoublyLinkedList(){
    this.head = null;
    this.tail = null;
}

DoublyLinkedList.prototype.addNode = function addNode(val){
    const node = new ListNode(val);
    if(!this.head){
        this.head = node;
        this.tail = node;
        return;
    }
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
}

DoublyLinkedList.prototype.deleteNode = function deleteNode(val){
    if(!this.head) return -1;
    
    //if p is the first node;
    if(this.head.val === val){
        this.head = this.head.next;
        if(this.head) this.head.prev = null;
        return true;
    }
    //if p is the last Node
    if(this.tail.val === val){
        this.tail = this.tail.prev;
        this.tail.next = null;
        return true;
    }

    let p = this.head;
    while(p){
        if(p.val === val){
            p.next.prev = p.prev;
            p.prev.next = p.next;
            return true;
        }
        p = p.next;
    }

    return false;
}

DoublyLinkedList.prototype.deleteFirstNode = function deleteNode(){
    if(!this.head) return -1;
    const key = this.head.val;
    this.head = this.head.next;
    if(this.head) this.head.prev = null;
    return key;
}

DoublyLinkedList.prototype.print = function print(){
    if(!this.head) return;
    let p = this.head;
    while(p){
        console.log(p.val);
        p = p.next;
    }
}

DoublyLinkedList.prototype.printReverse = function print(){
    if(!this.tail) return;
    let p = this.tail;
    while(p){
        console.log(p.val);
        p = p.prev;
    }
}

// const list = new DoublyLinkedList();
// list.addNode(4);
// list.addNode(6);
// list.addNode(8);
// list.addNode(2);
// list.deleteNode(8);
// list.addNode(52);
// list.addNode(100);
// list.deleteNode(101);
// list.print();
// console.log('----------------------')
// list.printReverse();

exports.DoublyLinkedList = DoublyLinkedList;