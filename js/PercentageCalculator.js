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
    
}