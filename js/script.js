// double Number
document.getElementById("double-btn").addEventListener("click", function () {
    const newNumberInput = document.getElementById("number-input");
    const newNumberInputText = newNumberInput.value;
    const newNumber = parseFloat(newNumberInputText);
    const doubleNumber = newNumber * 2;
    newNumberInput.value = "";

    const doubleTextInput = document.getElementById("double-text");
    doubleTextInput.innerText = doubleNumber;

});

// triple Number 

document.getElementById("triple-btn").addEventListener("click", function () {
    const newNumberInput = document.getElementById("number-added");
    const newNumberInputText = newNumberInput.value;
    const newNumber = parseFloat(newNumberInputText);
    const tripleNumber = newNumber * 3;
    newNumberInput.value = "";

    const tripleTextInput = document.getElementById("triple-text");
    tripleTextInput.innerText = tripleNumber;


});