import { tns } from 'tiny-slider/src/tiny-slider'

import GLightbox from 'glightbox';

if (document.querySelector('.hero-section')) {
    tns({
        container: '.hero-section .slides',
        items: 1,
        nav: false,
        // controlsContainer: '.hero-section .testimonial-nav',
        autoplay: true,
        controls:false,
        autoplayTimeout:50000,
        autoplayButtonOutput: false,
        controlsText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        responsive: {
            768:{
              items: 1,
              controlsText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
              controls:true
            }
        }
    })
}

if (document.querySelector('.blog-sec')) {
    tns({
        container: '.blog-sec .slides',
        items: 1,
        nav: false,
        // controlsContainer: '.hero-section .testimonial-nav',
        autoplay: true,
        controls:false,
        autoplayTimeout:50000,
        autoplayButtonOutput: false,
        controlsText:['<i class="fas fa-chevron-left"></i>' ,'<i class="fas fa-chevron-right"></i>'],
        responsive: {
            768:{
              items: 1,
              controlsText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
              controls:true
            }
        }
    })
}

const lightbox = GLightbox({});
