const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const letters = Array(256).fill(1);
let isListening = true;

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0f0';
    letters.map((y, index) => {
        const text = String.fromCharCode(3e4 + Math.random() * 33);
        const x = index * 10;
        ctx.fillText(text, x, y);
        letters[index] = y > 758 + Math.random() * 1e4 ? 0 : y + 10;
    });
}
setInterval(draw, 33);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        isListening = !isListening;
        document.getElementById('system-status').innerText = `SYSTEM: ${isListening ? 'ACTIVE [LISTENING...]' : 'IDLE'}`;
    }
});

document.getElementById('user-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const output = document.getElementById('chat-output');
        output.innerText = "FRIDAY: Processing your request...";
    }
});