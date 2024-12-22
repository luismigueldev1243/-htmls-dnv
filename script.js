const dino = document.querySelector('.dino');
const obstacle = document.querySelector('.obstacle');
const dinoP = document.querySelector('.Pt');
const image2 = document.querySelector('.image')

document.addEventListener('keydown',function(event2) {
  if (event2.key ==='ArrowUp'){   
   dino.classList.add('jump');
   setTimeout(() => {
      dino.classList.remove('jump');
  }, 500);   
  }
});
document.addEventListener('keydown', function(event) {
   if (event.key ==='ArrowDown'){   
    image2.classList.add('downy');
     setTimeout(() => {
    image2.classList.remove('downy');
   }, 1000);   
   }
});
let isAlive = setInterval(function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('bottom'));
    let dinobottom = parseInt(window.getComputedStyle(dino).getPropertyValue('height'));
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));
    let dinoP1 = parseInt(window.getComputedStyle(dinoP).getPropertyValue('left'));  
    if (obstacleLeft < 5 && obstacleLeft > 0 && dinoTop <= 40)   {
      alert('Game Over');
    }
    if (dinobottom > 15 && dinoP1 >0 && dinoP1 <20){
      alert('game over')
    }
  }, 10);
  