window.addEventListener('load', function () {
    const chincheta1 = document.querySelector('.chincheta');
    const article1 = document.querySelector('section:first-child');
    
    chincheta1.classList.add('chincheta1');
    
    article1.classList.add('article1');
    
    setTimeout(() => {
        const chincheta2 = document.querySelectorAll('.chincheta')[1];
        chincheta2.classList.add('chincheta2');

        const article2 = document.querySelector('section:nth-child(2)');
        article2.classList.add('article2');
    }, 1000); 
    setTimeout(() => {
        const chincheta3 = document.querySelectorAll('.chincheta')[2];
        chincheta3.classList.add('chincheta3');
        
        const article3 = document.querySelector('section:last-child');
        article3.classList.add('article3');
    }, 2000);
});

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
});
