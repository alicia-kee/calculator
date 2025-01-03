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

function addToString(newNum){
    if(currString.length < 12){
        currString = currString + newNum;
        display.textContent = currString;
    }
}

function clearData(){
    num1 = null;
    num2 = null;
    currString = "";
    display.textContent = currString;
}

function deleteLastDigit(){
    if(currString.length > 0){
        currString = currString.slice(0, currString.length-1);
    }
    display.textContent = currString;
}

let num1;
let num2;
let currString = "";

const display = document.querySelector(".display");

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.addEventListener("click", () => addToString(number.textContent));
});

const clear = document.querySelector(".clearBtn");
clear.addEventListener("click", clearData);

const deleteDigit = document.querySelector(".deleteBtn");
deleteDigit.addEventListener("click", deleteLastDigit);