function addNums(a,b){
    return a+b;
}

function subtractNums(a,b){
    return a-b;
}

function multiplyNums(a,b){
    return a*b;
}

function divideNums(a,b){
    return a/b;
}

function operate(num1, num2, operation){
    let result; 
    if(operation==="add"){ //not sure what operation values are yet
        result = addNums(num1, num2);
    }else if(operation==="subtract"){
        result = subtractNums(num1, num2);
    }else if(operation==="multiply"){
        result = multiplyNums(num1, num2);
    }else if(operation==="divide"){
        result = divideNums(num1, num2);
    }

    return result;
}