function operation(element){
    var firstNumber = parseFloat(document.getElementById("first-number").value);
    var secondNumber = parseFloat(document.getElementById("second-number").value);
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        document.getElementById("output").style.color = "red";
        document.getElementById("output").innerHTML = "Please enter valid numbers.";
        return;
    }
    let answer;
    if (element.textContent === "+"){
        answer = firstNumber + secondNumber;
    } else if (element.textContent === "-"){
        answer = firstNumber - secondNumber;
    } else if (element.textContent === "*"){
        answer = firstNumber * secondNumber;
    } else if (element.textContent === "/"){
        answer = firstNumber / secondNumber;
    } else if (element.textContent === "**"){
        answer = firstNumber;   
        for (var i = 1; i < secondNumber; i++){
            answer *= firstNumber;
        }
    } else {
        document.getElementById("output").style.color = "red";
        document.getElementById("output").innerHTML = "Invalid operation.";
        return;
    }
    if (answer < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }
    document.getElementById("output").innerHTML = answer;
}


function clearInputOutput(){
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
}