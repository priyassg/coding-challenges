/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    const result = [];
    const queue = [];
    if(!root) return result;
    queue.push(root);

    while(queue.length){
        let len = queue.length;
        result.push(queue[len -1].val)
        while(len > 0){
            let node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
            len = len -1;
        }
    }

    return result;
    
};