// header scroll state
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 30);
});



// mobile menu
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
hamburgerBtn.addEventListener('click', (e) => {
    e.stopPropagation();

    mobileMenu.classList.toggle("open");
    hamburgerBtn.classList.toggle("active");
});
mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
        mobileMenu.classList.remove('open')
        mobileMenu.classList.remove('active')
    });
});


document.addEventListener("click", (e) => {
    if (
        mobileMenu.classList.contains("open") &&
        !mobileMenu.contains(e.target) &&
        !hamburgerBtn.contains(e.target)
    ) {
        mobileMenu.classList.remove("open");
        hamburgerBtn.classList.remove("active");
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 980) {
        mobileMenu.classList.remove("open");
        hamburgerBtn.classList.remove("active");
    }
});


// scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));