//asending 
function binarySearch(target){
    let arr =  [3,2,4,1,6,7,1,5];
    let start = 0
    let end = arr.length-1
    
    arr.sort();
    console.log(arr);

    while(start <= end){

        let mid  = Math.floor((start + end)/2) 

        if(arr[mid] == target){
            return true;
        }else if(arr[mid] > target){
            end = mid - 1
        }else{
            start = mid + 1
        }
    }
    return false
}

//  let result =binarySearch();
// console.log(result);

/* Binary Search on Reverse Sorted Array - decending */
function reverseBinarySearch(target){
    let arr =  [3,2,4,1,6,7,1,5];
    let start = 0
    let end = arr.length - 1
    arr.sort();
    arr.reverse();

    while(start <= end){
        let mid = Math.floor((start + end)/2)

        if(arr[mid] == target){
            return true
        }else if(target > arr[mid]){
            end = mid - 1
        }else{
            start = mid + 1
        }
    }
    return false
}
//console.log(reverseBinarySearch(8));

function binarySearchOnNotKnownSort(target){
    let arr = [
        1, 1, 2, 3,
        4, 5, 6, 7
      ]
    let flag = ""

    //we don't really need to go for loop, this can be check by comapiring initial 2 elements in array if(arr[0] < arr[1]){run binarySearch()}
    for(let i = 0; i<= arr.length-1 ; i++){
        if(arr[i] < arr[i+1]){
            flag = true
        }else{
            flag = false
        }
    }

    if (flag) {
        console.log(binarySearch(target));
    }else{
        console.log(reverseBinarySearch(target)); 
    }
}
//binarySearchOnNotKnownSort(9);

/*count First And Last Occurance Of Element 
following code is to find fist position of target element 
we need to write a sprate method to seach last index of target element
which can be done by same code with slight change 
we need to more start pointer to right side of mid 
if(arr[mid] == target){
            res = mid;
            start = mid + 1
        }
*/
function countFirstOccuranceOfElement(arr, target){
    //let arr =  [4,2,4,1,6,7,4,5];
    let start = 0
    let end = arr.length - 1
    arr.sort();
    let res = 0

    while(start <= end){
        let mid = Math.floor((start+end)/2)

        if(arr[mid] == target){
            res = mid;
            end = mid - 1
        }else if(target < arr[mid]){
            end = mid - 1;
        }else{
            
            start = mid + 1;
        }
    }
    return res;
}
function countLastOccuranceOfElement(arr, target){
    let start = 0;
    let end = arr.length - 1;
    arr.sort();
    let res = -1;

    while(start <= end){
        let mid = Math.floor((start + end)/2);

        if(arr[mid] == target){
            res = mid;
            start = mid + 1;
        }else if(target > arr[mid]){
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }
    return res;

}

//console.log(countFirstAndLastOccuranceOfElement([4,2,4,1,6,7,4,5], 4));

//this can be solved by traversing throgh entrire array and count ++ but that would O(n) - linear traversing of array
function  CountOfAnElementInASortedArray(){
    console.log(new Date().getTime());  // to calculate performance time
    let arr = [4,2,4,1,6,7,4,5,1];
    let target = 1;
    let count = (countLastOccuranceOfElement(arr, target) - countFirstOccuranceOfElement(arr, target)) + 1;
    console.log(count);
    console.log(new Date().getTime());
}
//CountOfAnElementInASortedArray();

/* Find Minimum in Rotated Sorted Array*/
function rotatedSortedArray(arr){
    let start = 0;
    let end = arr.length - 1;
    
    while(start < end){
        let mid = Math.floor(start + (end - start)  / 2);

        if( arr[mid] > arr[end]){ // as this array is rotated we get a smaller element then current mid always at the end. 
            start = mid + 1;
        }else if(arr[mid]< arr[end]){
            end = mid
        }else{
            end --
        }
    }
        console.log(`${start} - index`);
} 
//rotatedSortedArray([ 7, 7, 1, 2, 4, 5, 7])

//Find Peak Element 
function findPeakElement(arr){
    //arr.sort()
    let start = 0;
    let end = arr.length - 1
    while(start< end){
        let mid = Math.floor(start+(end-start)/2)

        if(arr[mid] > arr[mid + 1]){ // if mid is greater then right side element then traverse to left side 
            end = mid
        }else{                       // else move start pointer to right and traverse to the right side 
            start = mid + 1;
        }
    }
    return start
}
// let res = findPeakElement([1, 2, 1, 3, 7, 6, 4])
// console.log(res);

//6. Search in Rotated Sorted Array (Medium) - https://www.youtube.com/watch?v=7lPuZdCJNBE
function searchInRoatedSortedArray(arr, target){
    let start = 0;
    let end = arr.length - 1;

    while(start <= end){
        let mid = Math.floor((start + end)/2)
        if(arr[mid] == target){
            return mid;
        }

        if(arr[start] <= arr[mid]){
            if(arr[start] <= target && target <= arr[mid]){
                end = mid - 1;
            }else{
                start = mid + 1
            }
        }else{
            if(arr[end] >= target && target >= arr[mid] ){
                start = mid + 1;
            }else{ 
                end = mid - 1;
            }
        }
    }
    return -1;
}
//console.log(searchInRoatedSortedArray([4, 5, 6, 7, 0, 1, 2], 6));




/*
Sure! Binary search is a fundamental algorithm often tested in technical interviews, including SDET (Software Development Engineer in Test) interviews. Here are some common LeetCode problems related to binary search that you might encounter in an SDET interview:

1. Binary Search (Easy)
Problem: Implement binary search to find the target value in a sorted array.
Link: Binary Search
2. Find First and Last Position of Element in Sorted Array (Medium)
Problem: Given an array of integers sorted in non-decreasing order, find the starting and ending position of a given target value.
Link: Find First and Last Position of Element in Sorted Array
3. Search Insert Position (Easy)
Problem: Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
Link: Search Insert Position
4. Find Minimum in Rotated Sorted Array (Medium)
Problem: Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. Find the minimum element.
Link: Find Minimum in Rotated Sorted Array
5. Find Peak Element (Medium)
Problem: A peak element is an element that is strictly greater than its neighbors. Given an integer array, find a peak element.
Link: Find Peak Element
6. Search in Rotated Sorted Array (Medium)
Problem: Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. Search for a given target in this array.
Link: Search in Rotated Sorted Array
7. Median of Two Sorted Arrays (Hard)
Problem: Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
Link: Median of Two Sorted Arrays
8. Kth Smallest Element in a Sorted Matrix (Medium)
Problem: Given an n x n matrix where each row and column is sorted in ascending order, find the kth smallest element in the matrix.
Link: Kth Smallest Element in a Sorted Matrix
9. Capacity To Ship Packages Within D Days (Medium)
Problem: A conveyor belt has packages that must be shipped from one port to another within D days. Find the least weight capacity of the ship that will result in all the packages being shipped within D days.
Link: Capacity To Ship Packages Within D Days
10. Split Array Largest Sum (Hard)
Problem: Given an array which consists of non-negative integers and an integer m, you can split the array into m non-empty continuous subarrays. Write an algorithm to minimize the largest sum among these m subarrays.
Link: Split Array Largest Sum? */