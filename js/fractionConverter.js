document.addEventListener('DOMContentLoaded', function() {
    // Get all number inputs
    const inputs = document.querySelectorAll('input[type="number"]');
    
    // Add input validation to all number inputs
    inputs.forEach(input => {
        input.addEventListener('input', function(e) {
            // Remove any non-numeric characters except minus sign
            this.value = this.value.replace(/[^\d-]/g, '');
            
            // Ensure only one minus sign at the start
            if (this.value.split('-').length > 2) {
                this.value = this.value.replace(/-/g, '');
                if (this.value) this.value = '-' + this.value;
            }
        });
    });

    window.convertToMixed = function() {
        const numerator = parseInt(document.getElementById('InproperNumerator').value);
        const denominator = parseInt(document.getElementById('InproperDenomenator').value);
        const resultButton = document.querySelector('.Inproperresult');

        // Validation
        if (isNaN(numerator) || isNaN(denominator)) {
            resultButton.textContent = 'Invalid input';
            return;
        }

        if (denominator === 0) {
            resultButton.textContent = 'Invalid denominator';
            return;
        }

        // Calculate mixed number
        const whole = Math.floor(Math.abs(numerator) / denominator);
        const newNumerator = Math.abs(numerator) % denominator;
        
        // Format result
        let result;
        if (newNumerator === 0) {
            result = (numerator < 0 ? '-' : '') + whole;
        } else {
            result = (numerator < 0 ? '-' : '') + 
                    (whole > 0 ? `${whole} ${newNumerator}/${denominator}` : 
                    `${newNumerator}/${denominator}`);
        }

        resultButton.textContent = result;
    };

    window.convertToImproper = function() {
        const whole = parseInt(document.getElementById('mixedNumber').value) || 0;
        const numerator = parseInt(document.getElementById('mixedNum').value);
        const denominator = parseInt(document.getElementById('mixedDen').value);
        const resultButton = document.getElementById('res');

        // Validation
        if (isNaN(numerator) || isNaN(denominator)) {
            resultButton.textContent = 'Invalid input';
            return;
        }

        if (denominator === 0) {
            resultButton.textContent = 'Invalid denominator';
            return;
        }

        // Calculate improper fraction
        const improperNumerator = Math.abs(whole) * denominator + Math.abs(numerator);
        const sign = (whole < 0 || numerator < 0) ? '-' : '';
        
        resultButton.textContent = `${sign}${improperNumerator}/${denominator}`;
    };

    // Add keyboard support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const activeElement = document.activeElement;
            if (activeElement.closest('.InproperConverter')) {
                convertToMixed();
            } else if (activeElement.closest('.MixedConverter')) {
                convertToImproper();
            }
        }
    });
});