let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

nextDom.onclick = function () {
    showSlider('next');
};
prevDom.onclick = function () {
    showSlider('prev');
};

let timeRunning = 3000;
let timeAutoNext=7000;
let runTimeOut;

function showSlider(type) {
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    
    carouselDom.classList.remove('next', 'prev');

    if (type === 'next') {
        
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);

        
        setTimeout(() => {
            carouselDom.classList.add('next');
        }, 10);
    } 
    else if (type === 'prev') {
        let positionLast = itemSlider.length - 1;

        
        listItemDom.prepend(itemSlider[positionLast]);
        thumbnailDom.prepend(itemThumbnail[positionLast]);

    
        setTimeout(() => {
            carouselDom.classList.add('prev');
        }, 10);
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next', 'prev');
    }, timeRunning);
}



