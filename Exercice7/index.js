const decimalInput = document.getElementById('decimalInput');
const binaryResult = document.getElementById('binaryResult');
const valueExpression = decimalInput.value;

function convertToBinary() {
  if (isNaN(decimalInput.value)) {
    return;
  }

  let valueExpression = parseInt(decimalInput.value);
  let result = '';

  while (valueExpression > 0) {
    console.log('Valeur actuelle:', valueExpression);
    let reste = valueExpression % 2;
    console.log('Reste:', reste);
    result = reste.toString() + result; // Ajout du reste au début de result
    valueExpression = Math.floor(valueExpression / 2);
    console.log('Nouvelle valeur:', valueExpression);
  }

  binaryResult.textContent = result;
}
