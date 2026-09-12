const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth; canvas.height = window.innerHeight;
const letters = Array(256).fill(1);
function draw() {
    ctx.fillStyle = 'rgba(0,0,0,0.05)'; ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0f0';
    letters.map((y, index) => {
        const text = String.fromCharCode(3e4 + Math.random() * 33);
        ctx.fillText(text, index * 10, y);
        letters[index] = y > 758 + Math.random() * 1e4 ? 0 : y + 10;
    });
}
setInterval(draw, 33);

let isListening = true;
const status = document.getElementById('status-indicator');
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        isListening = !isListening;
        status.innerText = isListening ? 'SYSTEM: ACTIVE [LISTENING...]' : 'SYSTEM: IDLE';
    }
});

const output = document.getElementById('chat-output');
function typeResponse(text, i = 0) {
    if (i < text.length) {
        output.innerHTML += text.charAt(i);
        setTimeout(() => typeResponse(text, i + 1), 50);
    }
}
document.getElementById('user-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        output.innerHTML = '';
        typeResponse("Processing request...");
    }
});
