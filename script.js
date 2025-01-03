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
    if(b===0){
        return "ERROR"
    }else{
        return a/b;
    }
}

function operate(){
    if(num1!==null && operation!==null && currString!==""){
        num2 = Number(currString);

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
        
        currString = "" + result;
        if(currString.length>12){
            result = result.toPrecision(10);
            currString = "" + result;
        }
        display.textContent = currString;

        //reset:
        if(result!=="ERROR"){
            num1 = result;
        }else{ //won't chain
            num1 = null;
            currString = "";
        }
        num2 = null;
        operation=null;
    }
}

function addToString(newNum){
    if(currString.length < 12){ 
        if(currString === "0"){ //just zero
            currString = newNum;

        }else{
            currString = currString + newNum;
        }
        display.textContent = currString;
    }
}

function clearData(){
    num1 = null;
    num2 = null;
    operation = null;
    currString = "";
    display.textContent = currString;
}

function deleteLastDigit(){
    if(currString.length > 0){
        currString = currString.slice(0, currString.length-1);
    }
    display.textContent = currString;
}

function addDecimal(){
    if(currString.length < 12 && !currString.includes(".")){ 
        currString = currString + ".";
        display.textContent = currString;
    }
}

function addZero(){
    if(currString !== "0"){ //can't enter more zeroes if just have 0 in display
        addToString("0");
    }
}

let num1 = null;
let num2 = null;
let operation = null;
let currString = "";

const display = document.querySelector(".display");

//Number buttons
const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.addEventListener("click", () => addToString(number.textContent));
});

//clear button
const clear = document.querySelector(".clearBtn");
clear.addEventListener("click", clearData);

//delete button
const deleteDigit = document.querySelector(".deleteBtn");
deleteDigit.addEventListener("click", deleteLastDigit);

//operation buttons
const addBtn = document.querySelector(".addBtn");
addBtn.addEventListener("click", () => {
    if(num2===null && currString!==""){
        num1 = Number(currString);
        operation = "add";
        currString=""; //reset for num2
    }
});
const subtractBtn = document.querySelector(".subtractBtn");
subtractBtn.addEventListener("click", () => {
    if(num2===null && currString!==""){
        num1 = Number(currString);
        operation = "subtract";
        currString=""; //reset for num2
    }
});
const multiplyBtn = document.querySelector(".multiplyBtn");
multiplyBtn.addEventListener("click", () => {
    if(num2===null && currString!==""){
        num1 = Number(currString);
        operation = "multiply";
        currString=""; //reset for num2
    }
});
const divideBtn = document.querySelector(".divideBtn");
divideBtn.addEventListener("click", () => {
    if(num2===null && currString!==""){
        num1 = Number(currString);
        operation = "divide";
        currString=""; //reset for num2
    }
});

const equalBtn = document.querySelector(".equalBtn");
equalBtn.addEventListener("click", operate);

const decimalBtn = document.querySelector(".decimalBtn");
decimalBtn.addEventListener("click", addDecimal);

const zeroBtn = document.querySelector(".number0");
zeroBtn.addEventListener("click", addZero)