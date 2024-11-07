document.addEventListener('DOMContentLoaded', function() {
    const tipInput = document.getElementById('TipInput');
    const tipPercentages = [5, 10, 13, 15, 18, 20, 25];

    // Format currency
    const formatCurrency = (number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(number);
    };

    function calculateTip() {
        const amount = parseFloat(tipInput.value) || 0;

        tipPercentages.forEach(percentage => {
            const tipAmount = amount * (percentage / 100);
            const total = amount + tipAmount;

            const amountElement = document.getElementById(`${percentage}Amount`);
            const totalElement = document.getElementById(`${percentage}Total`);

            // Update values with formatted currency
            amountElement.textContent = formatCurrency(tipAmount);
            totalElement.textContent = formatCurrency(total);

            // Highlight recommended tip (15%)
            const row = amountElement.parentElement;
            if (percentage === 15) {
                row.classList.add('recommended');
            } else {
                row.classList.remove('recommended');
            }
        });
    }

    // Calculate on input change
    tipInput.addEventListener('input', function(e) {
        // Remove any non-numeric characters except decimal point
        this.value = this.value.replace(/[^\d.]/g, '');
        
        // Ensure only one decimal point
        if ((this.value.match(/\./g) || []).length > 1) {
            this.value = this.value.replace(/\.+$/, '');
        }
        
        calculateTip();
    });

    // Add placeholder text
    tipInput.addEventListener('focus', function() {
        if (this.value === '') {
            this.value = '';
        }
    });

    tipInput.addEventListener('blur', function() {
        if (this.value === '') {
            calculateTip();
        }
    });

    // Initial calculation
    calculateTip();
}); 