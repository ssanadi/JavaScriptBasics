const readline = require("readline");
const { log } = require("util");
/*
 *  Question #217 :: Contains Duplicate -- Easy

Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:

Input: [1,2,3,1]
Output: true


Example 2:

Input: [1,2,3,4]
Output: false*/
function getDupliacteElementInArray(){
    let input = [1,2,1,3,1];
    let flag = false

    for (let index = 0; index < input.length; index++) {
        for(let j = index+1; j<input.length; j++){
            if (input[index] === input[j]) {
                return true;                
            }else{
                flag = false
            }
        }        
    }
    return flag;

}

// get duplicate values in array with O(n)
function getDuplicateElementWithOofN(){
    let arr = [1,2,6,3,1];
    arr.sort()
    for(let i = 0; i<arr.length-1; i++){
        if(arr[i] === arr[i+1]){
            return {duplicate: `duplcate value is ${arr[i]}`, flag: true};
        }
    }
    return false;

}

// get all duplicate words in string with O(n)
function getDuplicateElementsWithMap(){
    let text = "I am using java with java script with k6"
    let words = text.split(" ")
    let mapp = new Map();
    let duplicateElements = [];

    words.forEach(element => {
        if(mapp.has(element)===false){
            mapp.set(element, 1)
        }else
        {
            let counter = mapp.get(element)+1
            mapp.set(element, counter)
            duplicateElements.push({duplicateChar: element, count: counter})             
        }
    });

    return duplicateElements;
}

/*  remove duplicate characters from string and return back the string
*/
const removeDuplicateCharactersFromTheString = (text) => {
    let sett = new Set();
    let result = "";

    for(let i =0; i< text.length ; i++){
        sett.add(text[i])
    }
    
    sett.forEach(element=>{
        result = result.concat(element)
    });
    console.log(result);
}
//removeDuplicateCharactersFromTheString("saaiif");

/* =====================================================================================================
function findSmallesAndLargestNumberInArray without using sort
*/
function findSmallestAndLargestNumberInArray(){
    let arr = [5,23,4,40,8,40]
    let smallestNum = arr[0];
    let largestNum = arr[0];
    //let i = BigInt

    arr.forEach(num => {
        if(num > largestNum){
            largestNum=num;
        }else if(num < smallestNum){
            smallestNum=num
        }
    });

    console.log(`Smallest number =${smallestNum}, largest number =${largestNum}`);
    return {smallestNumber:smallestNum, largestNumber:largestNum}

}

/* Linear Search */
function linearSearch(target){
    let arr = [6,7,3,6,1];
    for(let i = 0; i< arr.length; i++){
        if(arr[i] == target){
            return i+1;
        }
    }
    return -1
}
//console.log(linearSearch(3)); 

//find second largest and second smallest number in the array
function findSecondLargestAndSecondSmallestNumberInArray(){
    let arr = [5,23,6,40,8,40]
    const largestSmallNum  = findSmallestAndLargestNumberInArray();
    const largestNum = largestSmallNum.largestNumber;
    const smallNum = largestSmallNum.smallestNumber;
    let secondLargestNumber = -1;
    let secondSmallestNumber = largestNum+1;

    arr.forEach(currentNum =>{
        if(currentNum>secondLargestNumber && currentNum<largestNum){
            secondLargestNumber = currentNum                        
        }else if(currentNum<secondSmallestNumber && currentNum>smallNum){
            secondSmallestNumber = currentNum
        }
    })

    return {secondLargestNum: secondLargestNumber, secondSmallestNum: secondSmallestNumber}
}

//const result  = findSecondLargestAndSecondSmallestNumberInArray();
//console.log(result);


//find second largest element using single loop
function findSecondLargestElement(){
    let arr = [5,23,6,40,8,40];
    let largestNum = -1;
    let secondLargestNum = -1;
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i]> largestNum){
            secondLargestNum = largestNum;
            largestNum = arr[i];
        }
    }
    console.log(`${largestNum}, ${secondLargestNum}`);
}
//findSecondLargestElement();

/* =====================================================================================================
swap two numbers using temp */
function swapTwoNumbersUsingTemp(){
    let var1 = "Hello";
    let var2 = "world"
    var temp;
    
    temp = var1;
    var1 = var2
    var2 = temp

    console.log(var1 + var2);

}

function swapTwoNumbersWithoutTemp(){
    let var1 = "Hello";
    let var2 = "world"

    var1 = var1.concat(var2)
    var2 = var1.substring(0, var1.length - var2.length)
    var1 = var1.substring(var2.length)

    console.log(`${var1} - - ${var2}`);
}

//reverse string 
function reverseString(){
    let text = "trying to reverse this string";
    var out = ""; 

    for(let i = text.length-1 ; i>=0 ; i--){
       out = out+text[i]
    }
    console.log(out);
}

//reverse each word in string while maintaining sequence of 
function reverseOnlyWordsInString(){
    let text = "trying to reverse this string";
    var out = ""; 
    let words = text.split(" ");
    //console.log(words);

    for(let i = 0 ; i<words.length; i++){
        let reversedWord = "";
        let currentWord = words[i]
        for(let j=currentWord.length-1; j>=0; j--){
            reversedWord = reversedWord + currentWord[j]
        }
        out = out + reversedWord+" "
    }
    console.log(out);
}

////const result = reverseOnlyWordsInString()

//console.log(result);

////febonica series
function febbonicaSeries(){
    let num1 = 0;
    let num2 = 1; 
    let nextTerm;
    count =10

    for(let i = 0 ; i<count ; i++){
        nextTerm = num1 + num2;

        num1 = num2;

        num2 = nextTerm
        console.log(num1)
    }

    /* if you are using while loop thn this would be the condition while(nextTerm<= count) */

}
//febbonicaSeries();

/* power of two */
function powerOfTwo(num){
    if (num <= 0) {
        return false        
    }
    while(true){
        //let result = num / 2;
        if(num % 2 == 0)
        {
           num = num / 2;
        }
        
        if(num == 1){
            return true
        }
        if(num % 2 == 1){
            return false
        }
    }
}
//console.log(powerOfTwo(122)); 

function SnakeCase(str) { 

    let res = ''
    res = str.match(/[^a-zZ-Z]+/g);
    console.log(res);
    
    //str.replace([/[^a-zZ-Z]+/g], ' ')
      for(let i = 0; i< str.length; i++){
        str[i].replace(/[^a-zZ-Z]+/g, ' ')
        res = res.concat(str[i]).toLowerCase();
      }
      return res; 
    //cats AND*Dogs-are Awesome
    }
       
    // keep this function call here 
    ///console.log(SnakeCase('cats AND*Dogs-are Awesome'));


// Union, Intersection of Sorted Arrays
function unionOfTwoArrays(arr1, arr2){
    let unionSet = new Set();
    let result = []

    arr1.forEach(element => {
        unionSet.add(element);
    });
    arr2.forEach(element => {
        unionSet.add(element)
    });

    for(const value of unionSet.values()){
        result.push(value)
    }
    console.log(result.sort());
}
//unionOfTwoArrays([1,3,5,6,7,8], [1,2,4,5,9])

//insertion of two array
function insertionOfTwoArray(arr1, arr2){
    let unionSet = new Set();
    let result = [];

    arr1.forEach(element => {
        unionSet.add(element);        
    });

    arr2.forEach(element => {
        if(unionSet.has(element)){
            result.push(element)
            unionSet.delete(element)
        }
    });
    console.log(result);
}
//insertionOfTwoArray([1,3,5,6,7,8], [1,2,4,5,9])

/* LeetCode 485 || Max Consecutive ones */
function MaxConsecutive(){
    let arr = [1,0,1,1,1,0,1,1]
    let max = 0
    let count = 0

    for(let i=0; i< arr.length; i++){
        if(arr[i] == 1){
            count ++
        }else{
            count = 0
        }

        max = Math.max(count, max)
    }
    console.log(max);
}
//MaxConsecutive();

/*merge sorted array */
function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;

    // Merge arrays
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // Append remaining elements of arr1
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // Append remaining elements of arr2
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

// Example usage
let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];
console.log(mergeSortedArrays(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]