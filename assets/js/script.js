// Controlar a rolagem da página
const counters = document.querySelectorAll('.card-stat h4');

counters.forEach(counter => {
    const target = parseInt(counter.innerText);

    let current = 0;

    const update = () => {
        current += Math.ceil(target / 50);

        if (current >= target) {
            counter.innerText = target;
        } else {
            counter.innerText = current;
            requestAnimationFrame(update);
        }
    };

    update();
});

// Controlar a animação de entrada dos elementos
const elementos = document.querySelectorAll(
    '.service-card, .card-stat, .contact-extra'
);

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

elementos.forEach(el => observer.observe(el));

