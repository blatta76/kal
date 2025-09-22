function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Ошибка';
    }
}
    
function calculateSin() {
    const display = document.getElementById('display');
    let value = parseFloat(display.value);
    if (isNaN(value)) {
        display.value = 'Ошибка';
        return;
    }
    // Конвертируем градусы в радианы
    let radians = value * (Math.PI / 180);
    display.value = Math.sin(radians).toFixed(8);
}

function calculateCos() {
    const display = document.getElementById('display');
    let value = parseFloat(display.value);
    if (isNaN(value)) {
        display.value = 'Ошибка';
        return;
    }
    // Конвертируем градусы в радианы
    let radians = value * (Math.PI / 180);
    display.value = Math.cos(radians).toFixed(8);
}