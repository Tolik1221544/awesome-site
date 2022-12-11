//ожидаем загрузки документа
$(document).ready(() => {
    //после загрузки ищем все элементы с классом .portfolio-item
    //и задаём событие щелчка
    $('.portfolio-item').on('click', (e) => {
        e.stopPropagation();
        createPopup(e.currentTarget);
    });
    $('.control-item').on('click', (e) => {
        e.stopPropagation();
        slideTestimonials(e.currentTarget);
    });

});
//щелчок по кнопке отзывов

//функция, выполняется по клику на активный элемент
function createPopup(item) {
    console.log(item)
    //передаем в HTML в jOuery переменную 
    const clicked = $(item);
    //получаем ссылку из атрибута дата
    const src = clicked.data('src');
    //создаем блок-контейнер
    const container = $('<div>',{'class':'popup-container'});
    //создаем картинку
    const img = $('<img>',{'class':'popup', 'src': src});
    //добавляем картинку в родительский блок
    container.append(img);
    //блок с картинкой рисуем в HTML-документе
    $('body').append(container);
    setTimeout(() => {
        container.addClass('ready');
    });
    img.on('click', () => {
        container.removeClass('ready');
        setTimeout(() => {
            container.remove();

        }, 250);
    })
}
function slideTestimonials(item){
    const clicked = $(item);
    if(clicked.hasClass('active')) {
        return;
    }
    const index = $('.control-item').index(clicked);
    console.log(index);
    const width = $('.testimonials-card').outerWidth(true);
    const scroll = width * 2 * index;
    $('.testimonials-inner').css('transform','translateX(-'+scroll + 'px)');
    $('.control-item').removeClass('active');
    $('.control-item').eq(index).addClass('active');

}