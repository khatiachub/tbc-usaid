//change header color on scroll
document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', function () {
        if (window.scrollY>0) {
                header.style.backgroundColor = 'rgb(34, 34, 34)';
                header.style.opacity = '0.95';
        } else {
            header.style.backgroundColor = 'rgb(26,30,31)';
            header.style.opacity = '1';
        }
    });
});

//burger bar
const burger=document.getElementById('burger-menu')
const nav=document.getElementById('burger-navbar')
burger.addEventListener('click',function(){
    nav.classList.toggle('d-block');
    burger.classList.toggle('active');
    burger.classList.toggle('color')
})
// document.addEventListener('click',function(){
//     nav.classList.remove('d-block');

// })