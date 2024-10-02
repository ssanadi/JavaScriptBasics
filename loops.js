 const arr = [10, 40, 20]
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);    
// }

const mapp = new Map()
mapp.set('MH', "maha")
mapp.set('KA', "karnataka")

// for (const [key, value] of mapp) {
//     console.log(key, '--', value);
// }

let res = arr.filter((val) => {return val<30})
console.log(res);
arr.reduce

//reverse the string
let text  = 'this is js'
console.log(text.split("").reverse().join(""));

//factorial
function factorial(){
    let res = 1
    let num = 5
    for(let i= 1; i<=num; i++){
        res = res* i
    }
    console.log(res);
}
//factorial();


// check if string is palindrom , if there are special char in string you should sanatize string before compairing
function checkIfStringIsPalindrom(text){
    let regXPattern = /[\W_]/g;
    let smallString = text.toLowerCase().replace(regXPattern, "");

    let revesedString = smallString.split("").reverse().join("");
    if(revesedString === smallString) return true;

    return false;

    console.log(smallString);
}
//console.log(checkIfStringIsPalindrom("_eye"));

//find longest number 
function FindLongestNumber(text){

    let maxLengthWord = "";
    let wordArray = text.split(" ")

    for(let i = 0 ;i< wordArray.length -1; i++){
        let currentLength = wordArray[i].length;
        if(currentLength > maxLengthWord.length){
            maxLengthWord = wordArray[i];
        }
    }
    return maxLengthWord

    //get max length word in single line code
    //return text.split(" ").sort()[0]

}
//console.log(FindLongestNumber("here arrrrrrrrrrre usssssss"))

 //create a sring with each word in it title case
 function eachWordTitleCase(text){
    let words = text.toLowerCase().split(" ");
    for(let i = 0; i < words.length; i++ ){
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
 }

 //console.log(eachWordTitleCase("here i am standing"));

 // Largest Numbers in each Array set
function largestNumberInArrays(arr){

    let maxArray = [];

    for(let i = 0; i< arr.length; i++){
        let maxNum = arr[i][0];
        for(let j = 0 ; j< arr[i].length; j++){
            let currentNum = arr[i][j]
            if(currentNum >= maxNum ){
                maxNum = currentNum;
            }
        }
        maxArray.push(maxNum)
    }
    return maxArray;

}
//console.log(largestNumberInArrays([[4,2,5,1], [232,112,767,231], [2221,3434,2313,5552]]));


// print sum of all element present in given array range
function GetSumOfAllElementsInArray(arr){
    let start = Math.min(arr[0], arr[1]) ;
    let end = Math.max(arr[0], arr[1]);
    let res = 0
    
    for(let i= start; i<= end; i++){
        res += i
    }
    console.log(res);

}
// GetSumOfAllElementsInArray([1,4]) // ==> 10

// const a = [1,33,3,1,4]
// const b = [2,13,5,6,32]
// const c = [...a, ...b]
// console.log(c);


//use generator palindrom function to Hacker rank - Postman question
function* paginate(list, pageSize){
    let startPointer = 0
    let endPointer = pageSize;
    let obj = []
    

    while(endPointer< list.length-1){
        //obj.push(list.slice(startPointer, startPointer+pageSize));
        yield list.slice(startPointer, startPointer+pageSize);
        startPointer=startPointer+pageSize;
        endPointer++
    }
    //console.log(obj);
    //yield obj;
}
// let page = paginate([4,2,5,2,3,1], 2);
// console.log(page.next().value); 
// console.log(page.next().value); 
// console.log(page.next().value); 


// Repeat string Num Times 
function repeatStringNumTimes(text, num){
    if(num > 10){ return;}      
    text = text.concat(text)
    console.log(text);
    num++;
    repeatStringNumTimes(text, num)

}
//repeatStringNumTimes('Hi', 3)

// return odd number array using recursion
let oddArray = []
function findOddNumbersUsingRecurssion(arr){
    if(arr.length == 0){return oddArray;}

    if(arr[0]%2 != 0){
        oddArray.push(arr[0]);
    }
    arr = arr.slice(1);
    return findOddNumbersUsingRecurssion(arr);
}
//console.log(findOddNumbersUsingRecurssion([1,2,3,4,5,6,7,8,9])); 


function ChunkeyMonkey(arr, num){
    let newArr = []
    while(arr.length > 0){
        newArr.push(arr.slice(0, num))
        arr = arr.slice(num);
    }
    return newArr;

}

// console.log(ChunkeyMonkey([33,3,2,5,8],2)); 
// //// output  - [ [ 33, 3 ], [ 2, 5 ], [ 8 ] ]