function operation(element){
    // Get inputs and parse as floats
    var firstNumber = parseFloat(document.getElementById("first-number").value);
    var secondNumber = parseFloat(document.getElementById("second-number").value);
    // Check if one of the inputs is null
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        document.getElementById("output").style.color = "red";
        document.getElementById("output").innerHTML = "Please enter valid numbers.";
        return;
    }
    let answer;
    // Instead of 5 seperate functions, I decided to use a switch statement and get the text from the element (button) that calls the single function
    switch (element.textContent) {
    case "+":
        answer = firstNumber + secondNumber;
        break;
    case "-":
        answer = firstNumber - secondNumber
        break;
    case "*":
        answer = firstNumber * secondNumber;
        break;
    case "/":
        answer = firstNumber / secondNumber;
        break;
    case "**":
        answer = firstNumber;   
        for (var i = 1; i < secondNumber; i++){
            answer *= firstNumber;
        }
        break;
    default:
        // Handle a command that has not been defined yet
        document.getElementById("output").style.color = "red";
        document.getElementById("output").innerHTML = "Invalid operation.";
    }
    // Red if negative 
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