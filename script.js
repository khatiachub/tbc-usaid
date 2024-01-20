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


