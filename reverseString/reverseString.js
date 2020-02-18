function reverseString(str){
    let i = str.length-1;
    let revStr = '';
    while(i>=0){
        revStr = revStr + str[i];
        i--;
    }
    return revStr;
}

let result = reverseString("hello");
console.log(result);

