

$('.navbar a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body')
            .animate({
                scrollTop: $(hash).offset().top
            }, 900);
    }
});

window.sr = ScrollReveal();
sr.reveal('.navbar', {
    duration: 1000,
    origin: 'top',
    distance: '500px',
    viewFactor: 0.1
});
sr.reveal('.line', {
    duration: 1000,
    origin: 'left',
    distance: '500px',
});
sr.reveal('.laptop', {
    duration: 800,
    origin: 'bottom',
    distance: '400px',
    viewFactor: 0.2
});
sr.reveal('#about', {
    duration: 800,
    origin: 'bottom',
    distance: '400px',
    viewFactor: 0.2
});
sr.reveal('.about-p', {
    duration: 800,
    origin: 'bottom',
    distance: '400px',
    viewFactor: 0.2
});
sr.reveal('#skills', {
    duration: 800,
    origin: 'bottom',
    distance: '400px',
    viewFactor: 0.2
});
sr.reveal('#portf', {
    duration: 500,
    origin: 'bottom',
    distance: '400px',
    viewFactor: 0.1
});
sr.reveal('.connect', {
    duration: 800,
    origin: 'bottom',
    distance: '400px',
    viewFactor: 0.1
});
sr.reveal('.fa-github', {
    duration: 800,
    origin: 'bottom',
    distance: '400px',
    viewFactor: 0.1
});
sr.reveal('.fa-linkedin', {
    duration: 800,
    origin: 'bottom',
    distance: '400px',
    viewFactor: 0.1
});

