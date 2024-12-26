let nums = [2, 7, 11, 15],
    target = 18;

let fo = function(arr=[],target) {
    let res = new Map();
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        if( res.get(target - arr[i]) !== undefined) {
            result =  [res.get(target - arr[i]),i]
        } else {
            res.set(arr[i],i);
        }
    }
    return result;
}
console.log(fo(nums,target));