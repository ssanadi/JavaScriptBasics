//Maximum Average Subarray (LeetCode 643) | Sliding Window Algorithm 
function MaxAverageSubarray(arr, k){

    let sum = 0;
    for(let i = 0 ; i > k; i++){
        sum = sum + arr[i];
    }
    let maxSum = sum;

    let startPointer = 0;
    let endPointer = k;
    while(endPointer < arr.length){
        sum = sum - arr[startPointer];
        startPointer++;

        sum = sum + arr[endPointer];
        endPointer++;

        maxSum = Math.max(sum, maxSum);
    }

    return maxSum/4;
}

console.log(MaxAverageSubarray([1,12,-5,-6,50,3], 4)); 