const wordList = document.querySelectorAll('.hero-section__word');
const subBlock = document.querySelector('.hero-section__sub-block');

const FAST_DELAY = 200;
const MEDIUM_DELAY = 600;
const SLOW_DELAY = 1100;
const ANIMATION_SPEED = 100;

const animateTyping = (words, speed) => {
    let delay = speed;

    words.forEach((word, i) => {
        setTimeout(() => {
            word.classList.add('animatedText');
        }, delay);

        if (i > 2 && i <= 5) {
            delay += FAST_DELAY;
        } else if (i > 5) {
            delay += MEDIUM_DELAY;
        } else {
            delay += SLOW_DELAY;
        }

    });

    setTimeout(() => {
        subBlock.classList.add('animatedText');
    }, delay);
}


document.addEventListener('DOMContentLoaded', () => animateTyping(wordList,  ANIMATION_SPEED));
