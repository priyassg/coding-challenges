function Node(val){
    this.val = val;
    this.left = null;
    this.right = null;
}

Node.prototype.insert = function insert(val){
    if(val < this.val){
        if(!this.left){
            node = new Node(val);
            this.left = node;
            return;
        }else{
            this.left.insert(val);
        }
    }else{
        if(!this.right){
            node = new Node(val);
            this.right = node;
            return;
        }else{
            insert.call(this.right, val);
        }
    }
}

Node.prototype.search = function search(searchVal){
    if(!this.val) return false;
    if(this.val === searchVal) return true;

    if(searchVal > this.val){
        return search.call(this.right, searchVal);
    }else{
        return search.call(this.left, searchVal);
    }
}

Node.prototype.deleteNode = function deleteNode(deleteVal){
    if(!this.val) return this;

    if(deleteVal > this.val){
        this.right = deleteNode.call(this.right, deleteVal);
    }else if(deleteVal < this.val){
        this.left = deleteNode.call(this.left, deleteVal);
    }else{
        if(!this.left && !this.right){
            return null;
        }else if(!this.right){
            let predesessor = findPredesessor(this);
            this.val = predesessor.val;
            this.left = deleteNode.call(this.left, this.val);
        }else{
            let successor = findSuccessor(this);
            this.val = successor.val;
            this.right = deleteNode.call(this.right, this.val);
        }
    }

    return this;
}

Node.prototype.print = function inorder(){
    if(!this.val) return;

    if(this.left) this.left.inOrder()
    console.log(this.val);
    if(this.right)this.right.inOrder();
}

Node.prototype.inOrder = function inOrder(){
    if(!this.val) return;
    const result = [];
    
    let left = inOrder.call(this.left);
    if(left) result.push(...left);
    result.push(this.val);
    let right = inOrder.call(this.right);
    if(right) result.push(...right);

    return result;

}

Node.prototype.iterativePostOrder = function (){

}

function findPredesessor(node){
    let predesessor = node.left;
    while(predesessor.right){
        predesessor = predesessor.right;
    }
    return predesessor;

}
function findSuccessor(node){
    let successor = node.right;
    while(successor.left){
        successor = successor.left;
    }
    return successor;
}

let tree = new Node(40);

tree.insert(20);
tree.insert(10);
tree.insert(5);
tree.insert(30);
tree.insert(25);
tree.insert(35);
tree.insert(60);
tree.insert(80);
tree.insert(74);
tree.insert(76);
tree.insert(27);

// tree.print();
// console.log('----------');
// console.log(tree.search(30));
// console.log('----------');
// tree.deleteNode(30)
// console.log(tree.search(30));
// tree.deleteNode(60);
// console.log('----------');
// tree.print();
console.log(tree.inOrder());
