

$('.navbar a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body')
            .animate({
                scrollTop: $(hash).offset().top
            }, 800);
    }
});

window.sr = ScrollReveal();

sr.reveal('.line', {
    duration: 1000,
    origin: 'left',
    distance: '500px',
});
