document.getElementById('convert-btn').addEventListener('click', () => {
    const tempInput = document.getElementById('temp-input').value;
    const unitInput = document.getElementById('unit-input').value;
    const unitOutput = document.getElementById('unit-output').value;

    let result;

    if (unitInput === unitOutput) {
        result = tempInput;
    } else {
        if (unitInput === 'celsius') {
            if (unitOutput === 'fahrenheit') {
                result = (tempInput * 9/5) + 32;
            } else if (unitOutput === 'kelvin') {
                result = parseFloat(tempInput) + 273.15;
            }
        } else if (unitInput === 'fahrenheit') {
            if (unitOutput === 'celsius') {
                result = (tempInput - 32) * 5/9;
            } else if (unitOutput === 'kelvin') {
                result = (tempInput - 32) * 5/9 + 273.15;
            }
        } else if (unitInput === 'kelvin') {
            if (unitOutput === 'celsius') {
                result = tempInput - 273.15;
            } else if (unitOutput === 'fahrenheit') {
                result = (tempInput - 273.15) * 9/5 + 32;
            }
        }
    }

    document.getElementById('result-value').textContent = result.toFixed(2);
});
