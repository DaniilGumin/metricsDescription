(function () {
    let header =
        '<header class="default-header">\n' +
        '    <nav class="navbar-default">\n' +
        '        <a class="navbar-logo" href="index.html">\n' +
        '            <img alt="logo" class="navbar-logo" src="Source/Images/logo.png">\n' +
        '        </a>\n' +
        '        <a id="metrics" class="navbar-button" href="metrics.html">Метрики</a>\n' +
        '        <a id="about-us" class="navbar-button" href="about_us.html">О нас</a>\n' +
        '    </nav>\n' +
        '</header>';

    // let footer =
    //     '<footer class="default-footer">\n' +
    //     '    <div class="card">\n' +
    //     '        <h2>Контакты</h2>\n' +
    //     '        <p class="footer-text">\n' +
    //     '    <span>\n' +
    //     '        <a target="_blank" href="https://t.me/xGLabBot">t.me/xGLabBot</a> - Футбольный диаграмы. Сонары и тепловые карты\n' +
    //     '    </span>\n' +
    //     '        </p>\n' +
    //     '        <p class="footer-text">\n' +
    //     '    <span>\n' +
    //     '        <a target="_blank" href="https://t.me/xglab_help">t.me/xglab_help</a> - Если возникли проблемы с сайтом или ботом, напишите сюда\n'+
    //     '    </span>\n' +
    //     '        </p>\n' +
    //     '        <p class="footer-text">\n' +
    //     '    <span>\n' +
    //     '        <a target="_blank" href="https://t.me/xGLabBot">t.me/xGLabBot</a> - Новостной канал\n' +
    //     '    </span>\n' +
    //     '        </p>\n' +
    //     '        <p id="load-time">\n' +
    //     '        </p>\n' +
    //     '    </div>\n' +
    //     '</footer>'


    document.addEventListener('DOMContentLoaded', _ => {
        let parent = document.getElementById("body");
        let headerPlace = document.createElement('header');
        headerPlace.innerHTML = header;
        parent.insertBefore(headerPlace.firstElementChild, parent.firstChild);
        document.dispatchEvent(new Event("layoutIsLoad"));
    });
})();