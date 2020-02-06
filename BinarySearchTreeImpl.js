/*
    This is a BST.
*/
function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}
Node.prototype.insert = function insert(val) {
    if(!this) return;

    if(val > this.val){
        if(!this.right){
            this.right = new Node(val)
            return;
        }else{
            insert.call(this.right, val);
        }
    }else {
        if(!this.left){
            this.left = new Node(val);
            return;
        }else{
            insert.call(this.left, val);
        }
    }
};

Node.prototype.inorderTraversalIterative = function () {

};

Node.prototype.printInorder = function printInorder() {
    if(!this || !this.val) return;

    printInorder.call(this.left);
    console.log(this.val);
    printInorder.call(this.right);
    return;
};
 

Node.prototype.preorderTraversal = function () {
};

 

Node.prototype.postorderTraversal = function () {
};

 

Node.prototype.delete = function () {
};

// [20,12,22,10,null,21,40]
let tree = new Node(20);
tree.insert(12);
tree.insert(22);
tree.insert(10);
tree.insert(21);
tree.insert(40);

tree.printInorder();

tree.inorderTraversalIterative();