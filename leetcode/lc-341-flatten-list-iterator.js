/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */

var NestedIterator = function(nestedList) {
    this.flattenList = flattenListFn(nestedList);

};


NestedIterator.prototype.hasNext = function() {
    
};


NestedIterator.prototype.next = function() {
    
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/

function flattenListFn(array){
    const result = [];

    for(let i=0; i< array.lenght; i++){
        if(array[i].isInteger){
            result.push(array[i].getInteger())
        }else{
            result.push(...flattenListFn(array[i].getList()));
        }
    }

    return result;

}

let a = flattenListFn([1,2,3,[4,5],6]);
console.log(a);