document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.Input');
    const results = document.getElementById('results');

    // Add input validation to all inputs
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

    window.RNG = function() {
        const firstNum = parseInt(document.getElementById('FirstRNG').value);
        const secondNum = parseInt(document.getElementById('SecondRNG').value);

        // Input validation
        if (isNaN(firstNum) || isNaN(secondNum)) {
            results.textContent = 'Please enter valid numbers';
            return;
        }

        // Ensure proper order of numbers
        const min = Math.min(firstNum, secondNum);
        const max = Math.max(firstNum, secondNum);

        // Generate random number (inclusive)
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

        // Animate the result
        let currentNum = min;
        const animationDuration = 1000; // 1 second
        const fps = 30;
        const steps = animationDuration / (1000 / fps);
        const increment = (randomNum - min) / steps;

        const animation = setInterval(() => {
            currentNum += increment;
            results.textContent = Math.round(currentNum);

            if (Math.abs(currentNum - randomNum) < Math.abs(increment)) {
                clearInterval(animation);
                results.textContent = randomNum;
            }
        }, 1000 / fps);
    }

    // Add keyboard support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            RNG();
        }
    });
});