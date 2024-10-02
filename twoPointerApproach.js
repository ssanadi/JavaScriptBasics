/* leet code #1 Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/
//following approach with O(n^2)
function twoSumWithoutSorting()
{
    let arr = [7,5,3,6,1];
    let target = 8;
    let flag = 0;

    for(let i =0 ; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i] + arr[j] === target){
                flag = 1;                
                return [arr[i], arr[j]]
            }
        }
    }
    if(flag === 0){
        return "No sum found for above target"
    }    
}

//using two pointer approach O(n)
function twoSumWithPointer(){
    let arr = [7,5,3,6,1];
    let target = 9;
    let flag = 0;
    let start = 0
    let end = arr.length-1

    //we need to sort the array in order to work with two pointer technique
    console.log(arr.sort());

    while(start < end){
        if(arr[start]+arr[end] === target){
            flag = 1
            return [arr[start], arr[end]]
        } else if(arr[start]+arr[end] > target){
            end--;
        }else{
            start++;
        }
    }

    return flag;

}

// Using HashMap to find Two Sum without sorting - O(n)
function twoSumWithMap(){
    let arr = [7,5,3,6,1];
    let target = 7;
    let flag = 0;
    let mapp = new Map();

   for(let i = 0 ; i< arr.length; i++){
        let complement = target - arr[i];

        if(mapp.has(complement)){
            return [arr[i], complement]
        }
        
        mapp.set(arr[i], i)
    }
}

//===================================================================================================
//leet code #283 move all zeros to end of the array using pointer method O(n)

function moveAllZerosToEndOfTheArray(){
    let arr = [1, 0, 2, 3, 0, 4, 0,88]
    let temp = null
    let j = 0

    if(arr.length == 1){
        return arr
    }
    for(let i = 0; i< arr.length; i++){
        if(arr[i] != 0){
            temp = arr[i];
            arr[i] = arr[j]
            arr[j] = temp
            j++;
        }
    }
    return arr;
}
//console.log(moveAllZerosToEndOfTheArray());


/* String palindrome. 
A palindrome is a word, phrase, number, or sequence of words that reads the same backward as forward.*/
function palindromeStringUsingTwoPointer(){
    let text = 'anna';

    let i = 0;
    let j = text.length-1;
    let flag ; 

    while(i<j){
        console.log(text.charAt(i));
        if(text.charAt(i) != text.charAt(j)){
            flag = false;
            break;
        }
        i++;
        j--;
    }

    if(flag === false){
        console.log(`${text} is NOT palindrom`);
    } else {console.log(`${text} is palindrom`); } 
}
//palindromeStringUsingTwoPointer()

///Reverse and Add given number repeatedly to get a Palindrome number
// function isPalindrom(num){
//     let stringLikeNum = num.toString();
//     let reversedString = stringLikeNum.split('').reverse().join('');
//     if(stringLikeNum === reversedString){
//         return true;
//     }
//     return false;

// }
// function stepsToCreatePalindrom(num){

//     let count =0;

//     while(!isPalindrom(num)){
//         num = num + Number(num.toString().split('').reverse().join(''))
//         count ++;
//     }
//     return count;
// }
// let result = stepsToCreatePalindrom(11)
// console.log(result);



// Write a Java Program to print the first and last position of a number in a given array.
function printFirstAndLastPositionOfNumberInArray(){
    let arr = [3,2,4,1,6,7,1,5]
    let target = 1;
    let firstIndex = -1;
    let lastIndex = -1;

    arr.forEach((element, index) => {
        if(element == target && firstIndex == -1){
            firstIndex = index+1
        } else if(element == target && firstIndex != -1){
            lastIndex = index+1
        }
    })

    console.log(firstIndex +" "+ lastIndex);
}
//printFirstAndLastPositionOfNumberInArray();

function printFirstAndLastPositionOfNumberInArrayWithTwoPointerMethod(){
    let arr = [3,2,4,1,6,7,1,5]
    let target = 1;
    let firstIndex = -1;
    let lastIndex = -1;
    let start = 0;
    let end = arr.length-1
    while(start < end){
        if(arr[start] == target && firstIndex == -1){
            firstIndex = start + 1
        }

        if(arr[end] == target && lastIndex == -1){
            lastIndex = end + 1
        }

        if(lastIndex != -1 && firstIndex != -1){
            break;
        }
        start++;
        end--;
    }
    console.log(firstIndex +" "+ lastIndex);
}
//printFirstAndLastPositionOfNumberInArrayWithTwoPointerMethod();

function workWithSet(){
    let sett = new Set();
    sett.add("a");
    sett.add("b");
    let flag = sett.add("a")

    console.log(sett.entries());

    console.log(sett.values('a'));

    let o = "eweww"
    console.log(o);
}
//workWithSet();

function threeSum(arr, target){
    if(arr.length<3 || arr == null){
        return `This array ${arr} is not qualified for 3 sum approach`
    }

    //To store unique conbination of result
    let set = new Set();
    
    //Sort the array before begining the approach
    arr.sort();

    /* the reason for this array we will pick first element in the array and use two pointer approach to find 3 sum in rest of the array.
     length-2 will make sure that i th index will travel till 3rd last element in array*/
    for(let i =0 ; i< arr.length - 2; i++){
        let start = i + 1;
        let end = arr.length - 1;

        while(start < end){
            let sum = arr[i] + arr[start] + arr[end];

            if(sum == target){
                set.add(arr[i] +","+ arr[start] +","+ arr[end])
                start++;
                end--;
            } else if(sum > target){
                end--;
            } else{
                start++;
            }
        }
    }
    return set;

}
//console.log(threeSum([-4,-1,-1,0,1,2], 0)); 

