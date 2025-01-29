const priceCards = document.querySelectorAll('.prices-section__cards');
const options = document.querySelectorAll('.toggle__option');

options.forEach(option => {
    option.addEventListener('click', () => {

        if (!option.classList.contains('toggle__option--selected')) {
            option.classList.add('toggle__option--selected');
        }

        Array.from(options).map(otherOption => {
            if (otherOption.dataset.card !== option.dataset.card) {
                otherOption.classList.remove('toggle__option--selected');
            }
        })

        Array.from(priceCards).map(card => {
            if (card.dataset.card === option.dataset.card) {
                if (!card.classList.contains('prices-section__cards--active')) {
                    card.classList.add('prices-section__cards--active');
                }
            } else {
                card.classList.remove('prices-section__cards--active');
            }
        });
    });
});
