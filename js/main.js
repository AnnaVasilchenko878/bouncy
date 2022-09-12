

const tabsBtns = document.querySelectorAll('.details-paginator__button');
const tabSlides = document.querySelectorAll('.details__item');

tabsBtns.forEach(onTabClick);

function onTabClick(item){
    item.addEventListener('click', function(){
        let activeBtn = item;
        // Получаем слайд по атрибуту data-tab из html
        let tabId = activeBtn.getAttribute('data-tab');
        // Создаем переменную в которой будем хранить активный таб
        let activeTab = document.querySelector(tabId);
        // Проверка на наличие у кнопки класса
        if(!activeBtn.classList.contains('active')){
                    // убираем класс active c кнопки
        tabsBtns.forEach(function(item) {
            item.classList.remove('active');
        })
        // убираем класс active-slide c слайда
        tabSlides.forEach(function(item) {
            item.classList.remove('active-slide');
        })

        activeBtn.classList.add('active');
        activeTab.classList.add('active-slide');
        }

    })
};

// делаем первый таб активным

document.querySelector('.details-paginator__button').click();