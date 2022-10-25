(function () {
    let pages = {
        'index.html': 'index',
        'about_us.html': 'about-us',
        'metrics.html': 'metrics',
    };

    function pageIsActive() {
        let itemId = pages[document.location.pathname.split('/').pop()];
        document.getElementById(itemId).style.color = '#6f7580';
    }

    document.addEventListener('layoutIsLoad', () => {
        pageIsActive();
    })
})();