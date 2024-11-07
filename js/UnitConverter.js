document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('Input');
    const dropdownFrom = document.getElementById('DropdownFrom');
    const dropdownTo = document.getElementById('DropdownTo');
    const resultsDisplay = document.getElementById('results');

    function convertLength(value, fromUnit, toUnit) {
        const units = {
            meter: 1,
            kilometer: 1000,
            centimeter: 0.01,
            millimeter: 0.001,
            foot: 0.3048,
            inch: 0.0254,
            yard: 0.9144,
            mile: 1609.34
        };

        if (!units[fromUnit] || !units[toUnit]) {
            throw new Error("Invalid unit provided");
        }

        const valueInMeters = value * units[fromUnit];
        return valueInMeters / units[toUnit];
    }

    function formatNumber(number) {
        if (Math.abs(number) < 0.01) {
            return number.toExponential(6);
        }
        return Number(number.toFixed(6)).toString();
    }

    function convert() {
        const value = parseFloat(input.value);
        const fromUnit = dropdownFrom.value.toLowerCase();
        const toUnit = dropdownTo.value.toLowerCase();

        if (!value || !fromUnit || !toUnit) {
            resultsDisplay.textContent = "Please fill in all fields";
            return;
        }

        try {
            const result = convertLength(value, fromUnit, toUnit);
            const formattedResult = formatNumber(result);
            resultsDisplay.textContent = `${formattedResult} ${toUnit}`;
        } catch (error) {
            resultsDisplay.textContent = "Error in conversion";
        }
    }

    // Add event listeners
    input.addEventListener('input', convert);
    dropdownFrom.addEventListener('change', convert);
    dropdownTo.addEventListener('change', convert);

    // Auto-convert as user types
    input.addEventListener('input', function(e) {
        // Remove any non-numeric characters except decimal point and minus
        this.value = this.value.replace(/[^\d.-]/g, '');
        
        // Ensure only one decimal point
        if ((this.value.match(/\./g) || []).length > 1) {
            this.value = this.value.replace(/\.+$/, '');
        }
        
        convert();
    });
});