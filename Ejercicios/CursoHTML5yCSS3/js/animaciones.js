window.addEventListener('load', function () {
    // Animate the first chincheta and article
    const chincheta1 = document.querySelector('.chincheta');
    const article1 = document.querySelector('section:first-child');
    
    chincheta1.classList.add('chincheta1');
    
    article1.classList.add('article1');
    
    // When the first chincheta and article animations are done, start the next animations
    setTimeout(() => {
        // Animate the second chincheta
        const chincheta2 = document.querySelectorAll('.chincheta')[1];
        chincheta2.classList.add('chincheta2');

        // Animate the second article
        const article2 = document.querySelector('section:nth-child(2)');
        article2.classList.add('article2');
    }, 1000);  // Wait for the first animation to finish (1 second)
    
    // When the second chincheta animation finishes, animate the third chincheta
    setTimeout(() => {
        const chincheta3 = document.querySelectorAll('.chincheta')[2];
        chincheta3.classList.add('chincheta3');
        
        // Animate the third article
        const article3 = document.querySelector('section:last-child');
        article3.classList.add('article3');
    }, 2000);  // Wait for the second animation to finish (2 seconds)
});
