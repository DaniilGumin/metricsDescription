/*
    use-case: Отображаем пользователю карусель с картинками метрик,
    который перелистываются с течением времени
 */

/*
    Итициализация класса Swiper
*/
var swiper = new Swiper(".mySwiper", {
    /*
        Указываем автопроигрывание
        delay - задержка между переключениями картинок
        disableOnInteraction - включаем интеративность, чтобы картинки автоматически переключались
     */
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    /*
        Добавляем пагинацию
        el - указываем какой класс отвечает за пагинацию
        clickable - включаем возможность переключение страниц, нажатием на кнопки под картинками
     */
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});