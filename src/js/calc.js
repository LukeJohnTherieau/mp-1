function addition(){
    var firstNumber = parseFloat(document.getElementById("first-number").value);
    var secondNumber = parseFloat(document.getElementById("second-number").value);
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        document.getElementById("output").style.color = "red";
        document.getElementById("output").innerHTML = "Please enter valid numbers.";
        return;
    }
    const answer = firstNumber + secondNumber;
    if (answer < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }
    document.getElementById("output").innerHTML = answer;
}
function subtract(){
    var firstNumber = parseFloat(document.getElementById("first-number").value);
    var secondNumber = parseFloat(document.getElementById("second-number").value);
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        document.getElementById("output").style.color = "red";
        document.getElementById("output").innerHTML = "Please enter valid numbers.";
        return;
    }
    const answer = firstNumber - secondNumber;
    if (answer < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }
    document.getElementById("output").innerHTML = answer;
}
function multiply(){
    var firstNumber = parseFloat(document.getElementById("first-number").value);
    var secondNumber = parseFloat(document.getElementById("second-number").value);
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        document.getElementById("output").style.color = "red";
        document.getElementById("output").innerHTML = "Please enter valid numbers.";
        return;
    }
    const answer = firstNumber * secondNumber;
    if (answer < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }
    document.getElementById("output").innerHTML = answer;
}
function divide(){
    var firstNumber = parseFloat(document.getElementById("first-number").value);
    var secondNumber = parseFloat(document.getElementById("second-number").value);
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        document.getElementById("output").style.color = "red";
        document.getElementById("output").innerHTML = "Please enter valid numbers.";
        return;
    }
    const answer = firstNumber / secondNumber;
    if (answer < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }
    document.getElementById("output").innerHTML = answer;
}
function power(){
    var firstNumber = parseFloat(document.getElementById("first-number").value);
    var secondNumber = parseFloat(document.getElementById("second-number").value);
    var answer = firstNumber;
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        document.getElementById("output").style.color = "red";
        document.getElementById("output").innerHTML = "Please enter valid numbers.";
        return;
    }
    for (var i = 1; i < secondNumber; i++){
        answer *= firstNumber;
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