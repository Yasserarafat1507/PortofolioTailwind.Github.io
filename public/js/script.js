// navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}

// Hamburger
const humberger = document.querySelector('#humberger');
const navMenu = document.querySelector('#nav-menu');

humberger.addEventListener('click', function(){
    humberger.classList.toggle('humberger-active');
    navMenu.classList.toggle('hidden');
})

// klik di luar hamburger
window.addEventListener('click', function (e) {
    if(e.target != humberger && e.target != navMenu) {
        humberger.classList.remove('humberger-active');
        navMenu.classList.add('hidden');
    }
});

// dark mode
const checkBox = document.querySelector('#dark-toggel');
const html = document.querySelector('html');

checkBox.addEventListener('click', function() {
    if (checkBox.checked) {
        html.classList.add('dark');
    }else{
        html.classList.remove('dark');
    }
});

// pindahkan toggel sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
        checkBox.checked = true;
    } else {
        document.documentElement.classList.remove('dark')
        checkBox.checked = false;
    }