document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    const options = { threshold: [0.1] };

    const showBlock = (group) => {
        group.forEach(element => {
            if (element.isIntersecting) {
                element.target.classList.add('animated');
            }
        })
    }

    const observer = new IntersectionObserver(showBlock, options);

    sections.forEach(section => {
        observer.observe(section)
    });
});
