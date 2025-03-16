const scrollButton = document.querySelector('.hero-section__button');
const targetSection =  document.querySelector('.who-are-we-section')

scrollButton.addEventListener('click', () => {
    targetSection.scrollIntoView({ behavior: 'smooth' });
});