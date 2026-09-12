const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = Array(256).fill(1);
function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0f0';
    ctx.font = '15px monospace';
    letters.map((y, index) => {
        const text = String.fromCharCode(3e4 + Math.random() * 33);
        const x = index * 20;
        ctx.fillText(text, x, y);
        letters[index] = y > 758 + Math.random() * 1e4 ? 0 : y + 20;
    });
}
setInterval(draw, 33);

const input = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const text = input.value;
        input.value = '';
        typeEffect(`FRIDAY: Processing "${text}"...`, chatBox);
    }
});

function typeEffect(text, element) {
    element.innerHTML = '';
    let i = 0;
    const speed = 50;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}
