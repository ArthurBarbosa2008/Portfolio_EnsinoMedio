const cursor = document.querySelector('.cursor'); // transforma a classe cursor em uma constante no JS
let trilho = document.getElementById('trilho'); // transforma o id trilho em constante no JS
let body = document.querySelector('body');
const mobile = document.querySelector(".mobile-menu");
const nav = document.querySelector("nav");

// Mouse personalizado
  // Seguir o mouse
  document.addEventListener('mousemove', e => {
    cursor.style.top = `${e.clientY}px`; // faz a posição top do cursor ser a mesma que a do mouse
    cursor.style.left = `${e.clientX}px`; // faz a posição left do cursor ser a mesma que a do mouse
  });

  // Detectar hover sobre links e botões
  const listaHover = document.querySelectorAll('a, button, .trilho'); // detecta os links e botões da minha página

  listaHover.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover')); // ativa o hover quando o mouse passa por cima
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover')); // desativa quando o mouse sair
  });

// Modo dark e modo light
  trilho.addEventListener('click', ()=> {
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
  })

// Menu mobile
  mobile.addEventListener("click", function (){
    nav.classList.toggle("active")
  })