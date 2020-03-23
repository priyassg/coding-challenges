/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    let seen = new Set();

    for(let i = 0; i< grid.length; i++){
        let row = grid[i];
        for(let j= 0; j< row.length; j++){
            let key = `${i}${j}`;
            if(row[j] === "1"){
                count += 1;
                findNieghbour(i, j, grid);
            }
        }
    }

    return count;
};
function findNieghbour(i, j, arr){
    if(i<0 || i>=arr.length || j<0 || j >= arr[i].length || arr[i][j] === "0") return;

    arr[i][j] = "0";
    findNieghbour(i-1,j,arr);
    findNieghbour(i+1, j, arr);
    findNieghbour(i,j-1,arr);
    findNieghbour(i,j+1, arr);
}