const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const columns = canvas.width / 20;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0f0';
    ctx.font = '15px monospace';
    drops.forEach((y, i) => {
        const text = String.fromCharCode(Math.random() * 128);
        ctx.fillText(text, i * 20, y * 20);
        if (y * 20 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    });
}
setInterval(drawMatrix, 50);

let isListening = true;
const statusEl = document.getElementById('status');
const chatInput = document.getElementById('chat-input');
const chatOutput = document.getElementById('chat-output');

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        isListening = !isListening;
        statusEl.innerText = isListening ? 'SYSTEM: ACTIVE [LISTENING...]' : 'SYSTEM: IDLE';
    }
});

chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const msg = chatInput.value;
        chatOutput.innerText = "> Processing: " + msg;
        chatInput.value = '';
        setTimeout(() => chatOutput.innerText = "> Response: Acknowledged.", 1500);
    }
});