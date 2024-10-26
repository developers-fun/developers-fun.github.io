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

function convert() {
    const value = parseFloat(document.getElementById('Input').value);
    const fromUnit = document.getElementById('DropdownFrom').value.toLowerCase();
    const toUnit = document.getElementById('DropdownTo').value.toLowerCase();

    if (!value || !fromUnit || !toUnit) {
        document.getElementById('results').innerText = "Please fill in all fields.";
        return;
    }

    const results = convertLength(value, fromUnit, toUnit);
    document.getElementById('results').innerText = `${results} ${toUnit}`;
}