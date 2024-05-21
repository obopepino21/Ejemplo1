function convertirTemperatura(inputNumber) {
  var input = document.getElementById("tempInput" + inputNumber).value;
  var selectFrom = document.getElementById("tempSelect" + inputNumber).value;
  var selectTo;
  var resultadoInput = document.getElementById("resultado");
  
  if (inputNumber === 1) {
    selectTo = document.getElementById("tempSelect2").value;
  } else if (inputNumber === 2) {
    selectTo = document.getElementById("tempSelect1").value;
  }
  
  if (input === "") {
    resultadoInput.value = "";
    return;
  }
  
  if (selectFrom === selectTo) {
    resultadoInput.value = input;
    return;
  }
  
  var convertedTemp;
  
  if (selectFrom === "celsius") {
    if (selectTo === "fahrenheit") {
      convertedTemp = (input * 9/5) + 32;
    } else if (selectTo === "kelvin") {
      convertedTemp = parseFloat(input) + 273.15;
    }
  } else if (selectFrom === "fahrenheit") {
    if (selectTo === "celsius") {
      convertedTemp = (input - 32) * (5/9);
    } else if (selectTo === "kelvin") {
      convertedTemp = (input - 32) * (5/9) + 273.15;
    }
  } else if (selectFrom === "kelvin") {
    if (selectTo === "celsius") {
      convertedTemp = input - 273.15;
    } else if (selectTo === "fahrenheit") {
      convertedTemp = (input - 273.15) * (9/5) + 32;
    }
  }
  
  resultadoInput.value = convertedTemp.toFixed(2);
}
