function RNG() {
    let results = document.getElementById('results')
    let FirstRNG = document.getElementById('FirstRNG').value
    let SecondRNG = document.getElementById('SecondRNG').value
    
    let NewNumber = Math.floor(Math.random() * (SecondRNG - FirstRNG))

    results.innerText = `Number: ${NewNumber}`
}