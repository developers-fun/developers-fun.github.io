function CreatePercentage (a, b) {
    let answer = (a / b) * 100
    console.log(answer)
    return answer
}

function ToDecimal (a) {
    console.log(a / 100)
    return (a / 100)
}

function Convertfraction() {
    let Num = document.getElementById('InproperNumerator')
    let Den = document.getElementById('InproperDenomenator')
    let results = document.getElementById('Presults')
    let Answer = Math.floor((Num.value / Den.value) * 100)
    console.log(Answer)
    results.innerText = `${Answer}%`
}
function ConvertPercentage() {
    let decimal = document.getElementById('Percentage').value
    let results = document.getElementById('Decrsults')

        if (!decimal.startsWith('0.') && !decimal.startsWith('.')) {
            decimal = `0.${decimal}`
        }
        if (!decimal.startsWith('.')) {
            return
        }

        let gcd = (a, b) => b ? gcd(b, a % b) : a;
        let [numerator, denominator] = [Math.round(decimal * 1e5), 1e5];
        let divisor = gcd(numerator, denominator);
        results.innerText = `${numerator / divisor}/${denominator / divisor}`;
}