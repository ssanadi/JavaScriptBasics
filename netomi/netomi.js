// Reversing string by keeping spaces intact at its place
function reverseString(){
    let input  = 'Help others';
    input = input.split('');
    let output = [];
    let start = 0;
    let end = input.length - 1;

    while(end != 0){
        if(input[start] != ' '){
            let letter = input[input.length - 1];
            input.pop();
            output.push(letter);
            end --;
        }else {
            output.push(' ');
            input.splice(start, 1);
             
        }
        start++;
        
    }
    console.log(output.join(''));
}

reverseString();
// sreh topleH