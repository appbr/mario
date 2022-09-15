var mario = window.document.getElementById('mario')
var game = window.document.getElementById('game')
var pipe = window.document.getElementById('pipe')

game.addEventListener('keydown', pular)
document.addEventListener('touchstart', pular)

function pular(){
    mario.classList.add('pular')

    setTimeout(() => {
        mario.classList.remove('pular')
    }, 500);
}



var loop = setInterval(() => {
        var pipePosition = pipe.offsetLeft;
        var marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

        
        if (pipePosition <= 75 && pipePosition > 0 && marioPosition < 45) {
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = 'images/game-over.png';
            mario.style.width = '50px'
            mario.style.marginLeft = '30px'
            // game.style.background = 'black';

            
            clearInterval(loop);

            // document.location.reload(true);

            

            
        }

    }, 10)    
