const menus =[...document.querySelectorAll('#menu-1')];
for(let i =0;i<menus.length;i++){
  menus[i].addEventListener('click',() =>{
    for(let j=0;j<menus.length;j++){
      if(menus[i]!==menus[j]){
        menus[j].classList.remove('active');
      }
    }
    menus[i].classList.add('active');
  })
}
