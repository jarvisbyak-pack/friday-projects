const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = '01';
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';
    drops.forEach((y, i) => {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, y * fontSize);
        if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    });
}
setInterval(drawMatrix, 50);

let isListening = true;
const statusEl = document.getElementById('listening-status');

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        isListening = !isListening;
        statusEl.innerText = isListening ? "SYSTEM: ACTIVE [LISTENING...]" : "SYSTEM: IDLE [PRESS ESC TO WAKE]";
    }
});

function typeResponse(text, element) {
    let i = 0;
    element.innerText = "";
    function loop() {
        if (i < text.length) {
            element.innerText += text.charAt(i);
            i++;
            setTimeout(loop, 50);
        }
    }
    loop();
}

// Simulated interaction
setTimeout(() => typeResponse("FRIDAY ONLINE. AWAITING INPUT...", document.getElementById('chat-output')), 1000);
