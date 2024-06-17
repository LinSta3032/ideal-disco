// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const galleries = document.querySelectorAll('.gallery-container');

    galleries.forEach(container => {
        const gallery = container.querySelector('.gallery');
        const leftButton = container.querySelector('.scroll-button.left');
        const rightButton = container.querySelector('.scroll-button.right');
        const items = container.querySelectorAll('.item');
        const itemWidth = items[0].offsetWidth + 20; // 项目宽度加上间距
        const visibleItems = Math.floor(container.querySelector('.gallery-wrapper').offsetWidth / itemWidth);
        let currentIndex = 0;

        leftButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                gallery.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
            }
        });

        rightButton.addEventListener('click', () => {
            if (currentIndex < items.length - visibleItems) {
                currentIndex++;
                gallery.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
            }
        });
    });
});
