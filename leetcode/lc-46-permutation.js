var permute = function(nums) {
    let currentSet = new Array(nums.length).fill(null);
    helper(0,nums,currentSet, nums);
};

function helper(pos, options, currentSet, arr){
    if(pos === arr.length) return;

    let newOpts = options.slice(0);
    let newSet = currentSet.slice(0);
    for(let i=0;i<options.length;i++){
        if(options[i] !== null){
            newSet[pos] = options[i];
            newOpts[i] = null;
            helper(pos+1, newOpts,newSet, arr);
            console.log(currentSet);
        }
    }
}

permute([1,2,3]);