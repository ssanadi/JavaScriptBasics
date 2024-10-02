function feb(){
    let val1 = 0;
    let val2 = 1;
    let temp = 0;
    let k = 15;
    let arrFeb = []
    arrFeb.push(val1, val2)
    //arrFeb.push(val2)

    for(let i = 0 ; i< k ; i++){
        let temp = val1 + val2;

        val1 = val2;
        val2 = temp;
        arrFeb.push(temp);
    }
    console.log(arrFeb);
    
}
//feb();

function newProgram(){
    let arr1 = ["1", "2", "3"];
    let arr2 = ["first","sec", "third"];

    let mapArr = new Map();

    if(arr1.length != arr2.length){
        return -1;
    }

    for(let i= 0; i<arr1.length; i++){
        mapArr.set(arr1[i], arr2[i]);
    }


    console.log(mapArr);
}
//newProgram();


function countCharInString(){
    let name = "saifali sanadi";

    let charMap = new Map();
    
    for(let i = 0 ; i< name.length; i++){
        //console.log(`${name[i]} -- ${charMap[i]}`);
        if(charMap.has(name[i])){
            let count = charMap.get(name[i]);
            count = count + 1;
            charMap.set(name[i], count);
            
        }else{
            charMap.set(name[i], 1);
        }        
        console.log(charMap);
    }
   
    
}
//countCharInString();







function isAnagram(){
let name1 = "army";
let name2 =  "mary";

if(name1.length != name2.length){
    return false;
}
let sortedName1 = name1.toLowerCase().split("").sort().join("");
let sortedName2 =  name2.toLowerCase().split("").sort().join("")

if(sortedName1 === sortedName2){
    return true;
}else{
    return false;
}


}
//console.log(isAnagram());
