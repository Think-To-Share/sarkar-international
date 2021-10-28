import { tns } from 'tiny-slider/src/tiny-slider'

if (document.querySelector('.hero-section')) {
    tns({
        container: '.hero-section .slides',
        items: 1,
        nav: false,
        // controlsContainer: '.hero-section .testimonial-nav',
        autoplay: false,
        autoplayButtonOutput: false,
    })
}