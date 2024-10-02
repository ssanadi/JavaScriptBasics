//The program should find out if an input string is balanced or not.
function balancedString(stringPattern){
    let stackArr = [];
for(let i = 0 ; i< stringPattern.length ; i++){
    if(stringPattern[i] == '[' || stringPattern[i] == '{' || stringPattern[i] == '('){
        stackArr.push(stringPattern[i]);
    }else if(stringPattern[i] == ']' && stackArr[stackArr.length -1] == '['){
        stackArr.pop();
    }else if(stringPattern[i] == '}' && stackArr[stackArr.length -1] == '{'){
        stackArr.pop();
    }else if(stringPattern[i] == ')' && stackArr[stackArr.length -1] == '('){
        stackArr.pop();
    }

    if(stackArr.length == 0){
        return true;
    }
}
console.log(stackArr[stackArr.length-1]);
return false;
}
//console.log(balancedString("[{}()]")); 


//// reverse string using stack
function reverseStringUsingStack(){
    let text = 'saif to next step';
    let reverseStringArr = [];
    let reversedString = ""

    for(let i = 0; i < text.length; i++){
        reverseStringArr.push(text[i]); // Use push to add elements to the array
    }

    while(reverseStringArr.length> 0){
        reversedString = reversedString.concat(reverseStringArr.pop());

    }

    console.log(reversedString);

}
//reverseStringUsingStack();

/*946. Validate Stack Sequences | Leetcode */
function ValidateStackSequence(pushed, popped){
    let stack = []
    let j = 0
    if(popped.length != pushed.length){
        return false
    }

    for(let i = 0; i < pushed.length; i++){
              stack.push(pushed[i])
              
              while(stack.length > 0 && stack[stack.length-1] == popped[j]){
                stack.pop();
                j++;
              }
    }
    if(stack.length == 0){return true}else{return false}

}
//console.log(ValidateStackSequence([1,2,3,4,5], [4,5,3,2,1]));
