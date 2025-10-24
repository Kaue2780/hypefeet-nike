// -------------------------
// Menu responsivo (mobile)
// -------------------------
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('header nav');

if(menuToggle){
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}

// -------------------------
// Slider de produtos básico
// -------------------------
const cardsContainer = document.querySelector('.cards-produtos');
let isDown = false;
let startX;
let scrollLeft;

if(cardsContainer){
  cardsContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    cardsContainer.classList.add('active');
    startX = e.pageX - cardsContainer.offsetLeft;
    scrollLeft = cardsContainer.scrollLeft;
  });
  cardsContainer.addEventListener('mouseleave', () => {
    isDown = false;
    cardsContainer.classList.remove('active');
  });
  cardsContainer.addEventListener('mouseup', () => {
    isDown = false;
    cardsContainer.classList.remove('active');
  });
  cardsContainer.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - cardsContainer.offsetLeft;
    const walk = (x - startX) * 2; // Velocidade do scroll
    cardsContainer.scrollLeft = scrollLeft - walk;
  });
}

