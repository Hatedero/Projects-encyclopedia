document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const form = document.getElementById('quest-form');
const msg = document.getElementById('response-msg');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    msg.textContent = "The raven has taken flight! Expect a reply by the next full moon.";
    msg.style.display = "block";
    form.reset();

    msg.scrollIntoView({ behavior: 'smooth', block: 'center' });
});