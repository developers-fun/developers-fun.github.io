function convertToMixed() {
    // Use querySelector to directly access input elements
    const numeratorText = document.querySelector("#num").value;
    const denominatorText = document.querySelector("#den").value;

    console.log("Numerator Value:", numeratorText);
    console.log("Denominator Value:", denominatorText);

    const numerator = parseInt(numeratorText);
    const denominator = parseInt(denominatorText);

    // Check if parsing was successful
    if (isNaN(numerator) || isNaN(denominator)) {
        document.querySelector(".result").innerText = "Invalid numerator or denominator!";
        return;
    }

    if (denominator === 0) {
        document.querySelector(".result").innerText = "Denominator cannot be zero!";
        return;
    }

    const whole = Math.floor(numerator / denominator);
    const newNumerator = numerator % denominator;
    const result = newNumerator > 0 ? `${whole} ${newNumerator}/${denominator}` : `${whole}`;

    document.querySelector(".result").innerText = `${result}`;
}

function convertToImproper() {
    const whole = parseInt(document.getElementById("whole").value);
    const numerator = parseInt(document.getElementById("mixedNumerator").value);
    const denominator = parseInt(document.getElementById("mixedDenominator").value);
    if (denominator === 0) {
        document.getElementById("result").innerText = "Denominator cannot be zero!";
        return;
    }
    const improperNumerator = (whole * denominator) + numerator;
    document.getElementById("result").innerText = `Improper Fraction: ${improperNumerator}/${denominator}`;
}
function CopyResult() {
    navigator.clipboard.writeText(document.getElementsByClassName("result").innerHTML);
}