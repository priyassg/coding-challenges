//Test if the Binary Tree satisfies the BST property
function treeNode(val){
    this.val = val;
    this.left = this.right = null;
}

//Recurssive - Checking Upper and lower bounds of each node.
var isValidBST = function(root) {
    return helper(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);  
};

function helper(node, l, u){
    if(!node) return true;
    if(node.val >= u || node.val <= l) return false;
    return (helper(node.left, l, node.val) && helper(node.right, node.val, u));
}

//Recurssive - Inorder property
function isValidBSTInOrder(root){
    const stack = []
    return helperInOrder(root, stack); 
}

function helperInOrder(node, stack){
    if(!node) return true;
    if(!helperInOrder(node.left, stack)) return false;
    if(stack.length){
        const el = stack.pop();
        if(node.val <= el) return false;
        stack.push(node.val);
    }else{
        stack.push(node.val);
    }
    if(!helperInOrder(node.right, stack)) return false;
    
    return true;
}


//BFS - Reducing time complexity when the property is voilated at a node whose depth is small

function isValidBFS(root){
    if(!root) return true;
    const queue = [];
    queue.push([root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY]);

    while(queue.length){
        const [node, lb, ub] = queue.shift();
        if(node.val >= ub || node.val <= lb) return false;

        if(node.left) queue.push([node.left, lb, node.val]);
        if(node.right) queue.push([node.right, node.val, ub]);
    }
    return true;
}
