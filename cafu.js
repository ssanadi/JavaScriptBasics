function stringReverse(){
    let text = "Saif is a bollywood star";
    let words = text.split(" ");
    let result = "";
    console.log(words.length);

    // for(let i = 0; i<words.length; i++){
        
    //     let reversedWord = "";

    //     for(let j = words[i].length-1 ; j>=0; j--){
    //         reversedWord = reversedWord.concat(words[i][j]);            
    //     }
    //    result = result.concat(reversedWord)+ " ";     
        
    // }

    for(let j = words.length-1 ; j>=0; j--){
        result = result.concat(words[j])+ " "; 
        

    }

    console.log(result);
    

}
//stringReverse();



function InBetweenZeros(){
    let arr = [1,2,0,0,0,4,3,0,0,4,0,23,0,0,0,0,3,4,0,0];
    if(arr.length < 1){
        return -1
    }

    for(let i = 1; i< arr.length ; i++){
        let onLeft = arr[i-1];
        let onRight = arr[i+1];

        if(arr[i] == 0){
            if(onLeft == 0 && onRight == 0){
                arr[i] = 5;
            }
        }
    }
    console.log(arr); 
}
//InBetweenZeros();

function NumberAndCounts(){
    let arr = [1,3,1,1,2];
    let resultArr = [] 

    for(let i = 0; i<arr.length; i++){
        let count = 0;
        for(let j = i; j<arr.length; j++){
            
            if(arr[i] == arr[j]){
                count = count +1;
                

            }else{
                break;
            }

        }
        resultArr.push(count, arr[i]);
        if(arr[i] == arr[i+1]){
            continue
        }

    }
    console.log(resultArr);
    

}
//NumberAndCounts();







// Given a string containing a number of characters, find the substrings within the string that satisfy
// the conditions below:
// • The substring's length should be in the inclusive interval [minLength, maxLength].
// • The total number of unique characters should not exceed maxUnique.
// Using those conditions, determine the frequency of the maximum occurring substring.
// ab,
// abc,
// bc,
// bcd,
// cd,
// cde,
// de



function findSubString(){
    let text = 'aaabcde';

    let minLength = 2;
    let maxLength = 3;
    let set  = new Set();
    let mapArr = new Map();

    for(let i = 0; i< text.length; i++){
        let start = i;
        let end = i;
        let counter = 0

        while(counter <= maxLength){
            let combination = text.slice('').slice(start, end)
            if(combination.length >= minLength && combination.length <= maxLength){
                //set.add(combination);
                if(mapArr.has(combination)){
                    let count = mapArr.get(combination);
                    count = count + 1;
                    mapArr.set(combination, count)
                }else{
                    mapArr.set(combination, 1)
                }
               
            }
            end ++;
            counter++;

        }
    }
    console.log(mapArr);

    

   
}
findSubString();

