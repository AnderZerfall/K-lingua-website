document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu');
    const nav = Array.from(menu.children).find(child => child.classList.contains('nav'))
    const burger = document.getElementById('open-menu');

    const isOpen = () => {
        return menu.style.visibility === 'visible';
    }

    console.log(isOpen());

    burger.addEventListener('click', () => {

        if (!isOpen()) {
            menu.style.visibility = 'visible';
            nav.style.transform = 'translateY(0)';
            nav.style.opacity = '1';
            menu.style.opacity = '1';

            burger.classList.add('open-burger');
            document.documentElement.style.overflowY = 'hidden';
        } else {
            menu.style.visibility = 'hidden';
            nav.style.transform = 'translateY(-150%)';
            nav.style.opacity = '0';
            menu.style.opacity = '0';

            burger.classList.remove('open-burger');
            document.documentElement.style.overflowY = 'scroll';
        }
    });

    const contactButton = document.querySelectorAll('.button--contact');
    console.log(contactButton);

    contactButton.forEach(contact => {
        contact.addEventListener('click', () => {
            window.location.replace('Contact.html');
        });
    });
});


