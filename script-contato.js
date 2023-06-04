const imgHamburguer = document.getElementsByClassName("img_hamburguer1")[0]; 

imgHamburguer.addEventListener('mouseover', (event) => {
  imgHamburguer.style.border = 'solid 1.1px #ff0000'; 
  imgHamburguer.style.transform = 'scale(1.1)';
  imgHamburguer.style.transition = 'transform 0.3s ease-in-out'
  imgHamburguer.style.cursor = 'pointer';
});

imgHamburguer.addEventListener('mouseout', (event) => {
  imgHamburguer.style.border = 'solid 1px #db0c39';
  imgHamburguer.style.transform = 'scale(1)';
  imgHamburguer.style.transition = 'transform 0.3s ease-in-out';
  imgHamburguer.style.cursor = '';
}); 