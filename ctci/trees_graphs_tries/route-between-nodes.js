/*
Given a directed graph, find if there is a route between 2 nodes

eg input: [[1,2],[3], [3], []];

nodes, 0, 3 - true
nodes 1,2 - false
*/

function routeExists(graph, start, end){
    return helper(start, [start], graph, end);
}

function helper(index, path, graph, end){
    if(index === end) return true;

    let children = graph[index];

    for(let child of children){
        path.push(child);
        let exists = helper(child, path, graph, end);
        if(exists) return true;
        path.pop();
    }

    return false;
}


const input = [[1,2],[2], [3,0], []];

console.log(routeExists(input,0,1));