//reverse string the characters in string without reversing special char or numbers.

function reverseStringWithoutReversingSymbol(str){
    
    let start = 0;
    let end = str.length - 1;
    let charArray = [...str] // or we can do str.split('')

    while(start < end){
        if(!isAlphabet(charArray[start])){
            start++;
        }else if(!isAlphabet(charArray[end])){
            end--
        } else{
            let temp = charArray[start];
            charArray[start] = charArray[end];
            charArray[end] = temp;

            start++;
            end --
        }
    }
    console.log(charArray.join(""));
}
function isAlphabet(character){
    if((character >= 'a' && character <= 'z') || (character >= 'A' && character <= 'Z')){
        return true;
    }else{
        return false;
    }
}
//console.log(isAlphabet('&'));
//reverseStringWithoutReversingSymbol("abc-XYZ")

/*189 Rotate array by k positions*/
function rotateArrayByKthTime(arr, k){
       
    while(k != 0){
        let item = arr[arr.length-1]
        arr.pop();
        arr.unshift(item)
        k--;
    }
    console.log(arr);
}

rotateArrayByKthTime([1,2,3,4,5,6,7], 3)