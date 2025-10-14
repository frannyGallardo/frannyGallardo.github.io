var grid = document.querySelector('.grid');

var mason = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
});

imagesLoaded(grid).on('progress',
    function() {
        mason.layout();
        resizeTime();
    }
);

function resizeTime() {
    var percentage = (100 / Math.ceil(window.innerWidth / 800)).toFixed(3).toString() + "%";

    document.querySelector('.grid-sizer').style.setProperty('width', percentage);

    var items = document.querySelectorAll('.grid-item');
    for (let i = 0; i < items.length; i++) {
        items[i].style.width = percentage;
    }

    mason.layout();
}

// window.onload = resizeTime;
window.onresize = resizeTime;