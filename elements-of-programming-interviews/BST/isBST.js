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
//TODO : better solution so as to not use the global 'previousNode' variable
var previousNode = null;
function isValidInOrder(root){
    previousNode = null;
    return helperInOrder(root); 
}

function helperInOrder(node){
    if(!node) return true;

    if(!helperInOrder(node.left)) return false;
    if(previousNode !== null && node.val <= previousNode) return false;
    previousNode = node.val;
    if(!helperInOrder(node.right)) return false;
    
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
