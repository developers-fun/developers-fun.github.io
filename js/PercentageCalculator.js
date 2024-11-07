document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input');
    
    // Add input validation to all inputs
    inputs.forEach(input => {
        input.addEventListener('input', function(e) {
            // Remove any non-numeric characters except decimal point
            this.value = this.value.replace(/[^\d.]/g, '');
            
            // Ensure only one decimal point
            if ((this.value.match(/\./g) || []).length > 1) {
                this.value = this.value.replace(/\.+$/, '');
            }
        });
    });

    window.Convertfraction = function() {
        const numerator = parseFloat(document.getElementById('InproperNumerator').value);
        const denominator = parseFloat(document.getElementById('InproperDenomenator').value);
        const results = document.getElementById('Presults');

        // Validation
        if (isNaN(numerator) || isNaN(denominator)) {
            results.textContent = 'Invalid input';
            return;
        }

        if (denominator === 0) {
            results.textContent = 'Invalid denominator';
            return;
        }

        // Calculate percentage
        const percentage = (numerator / denominator) * 100;
        results.textContent = `${percentage.toFixed(2)}%`;
    }

    window.ConvertPercentage = function() {
        const input = document.getElementById('Percentage').value;
        const results = document.getElementById('Decrsults');

        // Validation
        if (!input) {
            results.textContent = 'Enter a number';
            return;
        }

        const decimal = parseFloat(input) / 100;

        // Convert decimal to fraction
        const gcd = (a, b) => b ? gcd(b, a % b) : a;
        const precision = 1000000;
        let numerator = Math.round(decimal * precision);
        let denominator = precision;

        // Simplify fraction
        const divisor = gcd(numerator, denominator);
        numerator = numerator / divisor;
        denominator = denominator / divisor;

        results.textContent = `${numerator}/${denominator}`;
    }

    // Add keyboard support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const activeElement = document.activeElement;
            if (activeElement.closest('.ToPercentage')) {
                Convertfraction();
            } else if (activeElement.closest('.ToFraction')) {
                ConvertPercentage();
            }
        }
    });
});