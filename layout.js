var grid = document.querySelector('.grid');

var mason = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
});

imagesLoaded(grid).on('progress',
    function() {
        mason.layout();
    }
);

function resizeTime() {
    var screenWidth = window.innerWidth;
    var percentage;

    if (screenWidth <= 800) {
        percentage = '100%';
    }
    else if (screenWidth < 1600){
        percentage = '50%';
    }
    else {
        percentage = '33.333%';
    }

    document.querySelector('.grid-sizer').style.setProperty('width', percentage);

    var items = document.querySelectorAll('.grid-item');
    for (let i = 0; i < items.length; i++) {
        items[i].style.width = percentage;
    }

    mason.layout();
}

window.onload = resizeTime;
window.onresize = resizeTime;