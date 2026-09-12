const canvas = document.getElementById('matrix-rain');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0F0";
    ctx.font = fontSize + "px monospace";
    for (let i = 0; i < drops.length; i++) {
        const text = matrix.charAt(Math.floor(Math.random() * matrix.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    }
}
setInterval(draw, 50);

const responseBox = document.getElementById('response-box');
const input = document.getElementById('user-input');

function typeEffect(text, i = 0) {
    if (i === 0) responseBox.innerText = "";
    if (i < text.length) {
        responseBox.innerText += text.charAt(i);
        setTimeout(() => typeEffect(text, i + 1), 50);
    }
}

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        typeEffect("Processing: " + input.value + "... Initialization complete.");
        input.value = "";
    }
});
