function bubbleSort(arr){

    for(let i = 0; i<arr.length; i++){
        for(let j = i+1; j< arr.length; j++){
            if(arr[i] >= arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp
            }
        }
    }
    console.log(arr);

}

//bubbleSort([10,3,4,1,9,2])

function selectionSort(arr){

}

let i = 0;
let j = 1;
let arr = [3,12,4];
let myArray = [];

function isSorted(arr){
    for(let k = 0; k< arr.length; k++){
        if(arr[k]> arr[k+1]){
            return false;
        }
    }
    return true;
}

function bubbleSortUsingRecursion(arr){

    if(isSorted(arr)){
        myArray = arr;
        return arr;
        
    }else if(arr[i]>arr[j]){
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;

        i = 0;
        j = 1;

    }else{
        i++;
        j++
    }
    return bubbleSortUsingRecursion(arr);
}
let sortedResult = bubbleSortUsingRecursion(arr);
console.log(sortedResult);