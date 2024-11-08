function appendToDisplay(value) {
  const display = document.getElementById('display');
  display.value += value;
}

function clearDisplay() {
  const display = document.getElementById('display');
  display.value = '';
}

function calculateResult() {
  const display = document.getElementById('display');
  const operators = ['+', '-', '*', '/'];
  let operator, nb1, nb2;

  for (let op of operators) {
    if (display.value.includes(op)) {
      operator = op;
      [nb1, nb2] = display.value.split(op).map((num) => {
        return parseFloat(num.trim());
      });

      break;
    }
  }

  let result;
  switch (operator) {
    case '+':
      result = nb1 + nb2;
      break;
    case '-':
      result = nb1 - nb2;
      break;
    case '*':
      result = nb1 * nb2;
      break;
    case '/':
      if (nb2 === 0) {
        display.value = 'Division by zero is not allowed';
        return;
      }
      result = nb1 / nb2;
      break;
  }
  display.value = result;
}
