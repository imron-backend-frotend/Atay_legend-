const emojiContainer = document.getElementById('emoji-container');
const emojis = ['🚰', '💧', '🚿', '😂', '🤣', '🧼', '🛁'];

function createEmoji() {
    const emoji = document.createElement('div');
    emoji.className = 'floating-emoji';
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    
    const startX = Math.random() * window.innerWidth;
    const duration = 5 + Math.random() * 10;
    const size = 1 + Math.random() * 3;
    
    emoji.style.left = `${startX}px`;
    emoji.style.top = `${window.innerHeight}px`;
    emoji.style.setProperty('--duration', `${duration}s`);
    emoji.style.fontSize = `${size}rem`;
    
    emojiContainer.appendChild(emoji);
    
    setTimeout(() => {
        emoji.remove();
    }, duration * 1000);
}

// Initial burst
for (let i = 0; i < 10; i++) {
    createEmoji();
}

// Ongoing rain
setInterval(createEmoji, 500);

// Interaction
document.addEventListener('click', (e) => {
    for (let i = 0; i < 5; i++) {
        setTimeout(createEmoji, i * 100);
    }
});

console.log('ATAY PROTOCOL INITIATED. GLORY TO THE SINK.');
