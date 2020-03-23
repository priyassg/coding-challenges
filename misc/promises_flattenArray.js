
const flatten = (input) => {
    // Code here
    const results = [];
    
    for(let i = 0; i < input.length; i++){
        const element = input[i];
        const value = element.value;
        
        results.push({value});
        for(let child of element.children){
            let output = flatten([child]);
            results.push(...output);
        };
    }

    return results;
};

// getBatch(index)
 
// The function makes a request call to the backend to fetch the data.
// It returns a promise which can be resolved to the same JSON structure as Part 1.

// Mock implementation

const getBatch = (index) => {
    return new Promise((resolve, reject) => {
        if (index === 1) {
            resolve([
                {
                    value: 'value0',
                    children: []
                }
            ]);
        } else if (index === 2) {
            reject("Error");
        } else if (index === 3) {
            
        }
    });
};

// Task: Implement getValueList(fromIndex, toIndex) such that it combines successive calls
// to getBatch(index) to produce a Promise containing the result shown below:

const getValueList = (fromIndex, toIndex) => {
    // Code here
    const promises = [];
    for( let i = fromIndex; i <= toIndex; i++){
        let p = getBatch(i);
        promises.push( getBatch(i) );
    }
    
    return Promise.allSettled(promises).then(results => {
        
        const flattenedResults = [];
        results.forEach( result => {
            if(result.value !== 'Error'){
                let flattenR = flatten(result.value)
                flattenedResults.push(...flattenR);
            }
            
        });
        return flattenedResults;
    });
};

expected = [
    { value: 'value0' },
    { value: 'value1' },
    { value: 'value2' },
    { value: 'value3' },
    { value: 'value4' },
    { value: 'value5' },
    { value: 'value6' }
];

getValueList(1, 3).then(result => {
    console.log({ result })
    console.log("result should match expected: ", JSON.stringify(result) === JSON.stringify(expected))
});