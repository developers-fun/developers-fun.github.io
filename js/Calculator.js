function appendToExpression(value) {
  document.getElementById("expression").value += value;
}

function clearExpression() {
  document.getElementById("expression").value = '';
  document.getElementById("result").innerText = 'Result: ';
}

function calculate() {
  const expression = document.getElementById("expression").value;
  let result;

  try {
    // Evaluate the expression
    result = eval(expression);
  } catch (error) {
    result = 'Invalid expression';
  }

  document.getElementById("expression").value = `${result}`;
}