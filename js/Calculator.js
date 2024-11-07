document.addEventListener('DOMContentLoaded', function() {
    const expression = document.getElementById('expression');
    let isNewCalculation = false;

    window.appendToExpression = function(value) {
        if (isNewCalculation) {
            expression.value = '';
            isNewCalculation = false;
        }

        // Handle special cases
        if (value === '**') {
            expression.value += '^';
        } else {
            expression.value += value;
        }
    }

    window.clearExpression = function() {
        expression.value = '';
        isNewCalculation = false;
    }

    window.calculate = function() {
        try {
            let result;
            // Replace ^ with ** for exponentiation
            let expr = expression.value.replace(/\^/g, '**');
            
            // Validate expression
            if (!/^[0-9+\-*/.() ]*$/.test(expr)) {
                throw new Error('Invalid characters in expression');
            }

            // Calculate
            result = eval(expr);

            // Format result
            if (Number.isInteger(result)) {
                expression.value = result;
            } else {
                expression.value = parseFloat(result.toFixed(8));
            }

            isNewCalculation = true;
        } catch (error) {
            expression.value = 'Error';
            isNewCalculation = true;
        }
    }

    // Add keyboard support
    document.addEventListener('keydown', function(event) {
        const key = event.key;
        
        if (key >= '0' && key <= '9' || ['+', '-', '*', '/', '.', '^'].includes(key)) {
            event.preventDefault();
            appendToExpression(key);
        } else if (key === 'Enter') {
            event.preventDefault();
            calculate();
        } else if (key === 'Escape') {
            event.preventDefault();
            clearExpression();
        } else if (key === 'Backspace') {
            event.preventDefault();
            expression.value = expression.value.slice(0, -1);
        }
    });
});