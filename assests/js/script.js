// TYPED JS
console.log("aloi");

var typed = new Typed('#text', {
    strings: [
        'NFTs',
        'Arts',
        'Music'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
})

// SWIPER JS

var swiper = new Swiper('.brandSwiper', {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 1800,  
        disableOnInteraction: false 
    },
    breakpoints: {
        1200: {
            slidesPerView: 5
        },
        992: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 4
        },
        576: {
            slidesPerView: 4
        },
        0: {
            slidesPerView: 3
        }

    }   
});

var swiper1 = new Swiper('.collectionSwiper', {
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2000,  
        disableOnInteraction: false 
    },
    breakpoints: {
        1200: {
            slidesPerView: 4
        },
        992: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 2
        },
        576: {
            slidesPerView: 1
        },
        0: {
            slidesPerView: 1
        }

    }   
});

var swiper2 = new Swiper('.teamsSwiper', {
    slidesPerView: 4,
    loop: true,
    spaceBetween: 10,
    autoplay: {
        delay: 2000,  
        disableOnInteraction: false 
    },
    breakpoints: {
        1200: {
            slidesPerView: 4
        },
        992: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 2
        },
        576: {
            slidesPerView: 1
        },
        0: {
            slidesPerView: 1
        }

    }   
});

var swiper2 = new Swiper('.testSwiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    autoplay: {
        delay: 2000,  
        disableOnInteraction: false 
    },
});


// ANIMATION HEADER IMAGE

document.addEventListener('DOMContentLoaded', function() {
    const heroImg = document.querySelector('.hero_img img');
    
    heroImg.addEventListener('mouseenter', function() {
        document.documentElement.style.setProperty('--before-rotate', '-20deg');
        document.documentElement.style.setProperty('--after-rotate', '-5deg');
    });
    
    heroImg.addEventListener('mouseleave', function() {
        document.documentElement.style.setProperty('--before-rotate', '-25deg');
        document.documentElement.style.setProperty('--after-rotate', '-10deg');
    });
});

// SHOW MAENU TOGGLE

var bar = document.querySelector('.bars');
var menu = document.querySelector('.menu');
var barIcon = document.querySelector('.bars i');

const style = document.createElement('style');
style.textContent = `
  .bars i {
    transition: transform 0.3s ease-in-out;
  }
  
  .rotate-icon {
    transform: rotate(180deg);
  }
`;
document.head.appendChild(style);

bar.addEventListener('click', () => {
    // Toggle menu visibility
    menu.classList.toggle('show_menu');
    
    // Toggle between menu icon and close icon with rotation
    if (barIcon.classList.contains('ri-menu-2-line')) {
        barIcon.classList.add('rotate-icon');
        
        setTimeout(() => {
            barIcon.classList.remove('ri-menu-2-line');
            barIcon.classList.add('ri-close-line');
        }, 150);
    } else {
        barIcon.classList.remove('rotate-icon');
        
        setTimeout(() => {
            barIcon.classList.remove('ri-close-line');
            barIcon.classList.add('ri-menu-2-line');
        }, 150);
    }
});


// SCROLL REVEAL ANIMATION
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

let lastScrollY = window.scrollY;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        navbar.classList.add("hidden");
    } else {
        navbar.classList.remove("hidden");
    }
    lastScrollY = window.scrollY;
});


