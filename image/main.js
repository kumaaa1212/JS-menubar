
const container =document.querySelector('.container');
for(let i =0; i<=50 ;i++){
  const block = document.createElement('div');
  block.classList.add('blocks');
  container.appendChild(block);
} 
function animateblocks() {
  anime({
    targets:'.blocks',
    translateX:function(){
      return anime.random(-800,700);
    },
    translateY:function(){
      return anime.random(-500,500);
    },
    scale:function(){
      return anime.random(1,3);
    },
    duration:2500,
    delay:anime.stagger(15),
    complete:animateblocks,
  });
}
animateblocks();