let audio = new Audio('music.mp3'); 
function startLoveMessage() {
    document.getElementById('message').style.display = 'block';
    document.getElementById('message').classList.add('fade-in');
    document.getElementById('startButton').style.display = 'none';
    setInterval(createFlower, 300);
    setInterval(createHeart, 500);
    audio.volume = 0.5;
    audio.play();
}

function createFlower() {
    const flower = document.createElement('img');
    flower.src = 'sunflower.png'; 
    flower.classList.add('flower');
    document.body.appendChild(flower);
    
    const startPosX = Math.random() * window.innerWidth;
    const duration = Math.random() * 5 + 3;
    flower.style.left = `${startPosX}px`;
    flower.style.animationDuration = `${duration}s`;
    
    setTimeout(() => {
        flower.remove();
    }, duration * 1000);
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    document.body.appendChild(heart);
    
    const startPosX = Math.random() * window.innerWidth;
    const duration = Math.random() * 4 + 3;
    heart.style.left = `${startPosX}px`;
    heart.style.animationDuration = `${duration}s`;
    
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}
