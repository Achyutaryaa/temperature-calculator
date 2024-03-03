let celsius = document.getElementById("celsius");
let result = document.getElementById("result");

function convertTemperature() {
    let celsiusValue = Number(celsius.value);
    let fahValue = (celsiusValue * 9/5) + 32;
    result.innerHTML = "Fahrenheit: " + fahValue.toFixed(2);
}
