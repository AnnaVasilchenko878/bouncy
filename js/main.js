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

const tabServicesBtns = document.querySelectorAll('.services-paginator__button');
const tabServicesSlides = document.querySelectorAll('.services__item');

tabServicesBtns.forEach(onTabServClick);

function onTabServClick(item) {
    item.addEventListener('click', function(){
        let activeServBtn = item;
        let tabServId = activeServBtn.getAttribute('data-tab');
        let activServTab = document.querySelector(tabServId);
        if(!activeServBtn.classList.contains('active')) {
            
            tabServicesBtns.forEach(function(item){
                item.classList.remove('active');
            })

            tabServicesSlides.forEach(function(item){
                item.classList.remove('active-slide');
            })

            activeServBtn.classList.add('active');
            activServTab.classList.add('active-slide');

        }
    })
};

document.querySelector('.services-paginator__button').click();

// slider team

const teamSlides = document.querySelectorAll('.employers__item');
const teamPaginators = document.querySelectorAll('.team-paginator__item');
// активный слайд в который будут записываться изменения
let teamActiveSlideIndex = 0;

// Вешают на элементы классы
function teamActiveSlide (n) {
    for(slide of teamSlides) {
        slide.classList.remove('active-slide-team');
    }

    teamSlides[n].classList.add('active-slide-team');
}
function teamActivePaginator(n) {
    for(dot of teamPaginators) {
        dot.classList.remove('active-paginator');
    }
    teamPaginators[n].classList.add('active-paginator');
}

// Объединение двух функций с навешиванием классов
function teamCurrentSlide(item) {
    teamActiveSlide(item);
    teamActivePaginator(item);
}
// Бесконечный механизм перелистывания слайдов
function teamNextSlide () {
    if (teamActiveSlideIndex == teamSlides.length-1) {
        teamActiveSlideIndex = 0;
        teamCurrentSlide(teamActiveSlideIndex);
    } else {
        teamActiveSlideIndex ++;
        teamCurrentSlide(teamActiveSlideIndex);
    }

}
function teamPrevSlide () {
    if (teamActiveSlideIndex == 0) {
        teamActiveSlideIndex = teamSlides.length-1;
        teamCurrentSlide(teamActiveSlideIndex);
    } else {
        teamActiveSlideIndex --;
        teamCurrentSlide(teamActiveSlideIndex);
    }
}

// Механизм перелистывания слайдов путем клика на точку
teamPaginators.forEach(function(item, indexDot) {
    item.addEventListener('click', function(){
        teamActiveSlideIndex = indexDot;
        teamCurrentSlide(teamActiveSlideIndex);
    })
})

// Механизм слайдшоу
setInterval(teamNextSlide, 5000);

// slider testimonials 

const testSlides= document.querySelectorAll('.testimonials__item');
const testDots = document.querySelectorAll('.testimonials__paginator--item');

let testActiveIndex = 0;

function testActiveSlide(n) {
    for(slide of testSlides) {
        slide.classList.remove('active-slide-testimonials');
    }
    testSlides[n].classList.add('active-slide-testimonials');
}
function testActivePaginator(n) {
    for(dot of testDots) {
        dot.classList.remove('active-paginator');
    }
    testDots[n].classList.add('active-paginator');
}

function testCurrentSlide (item) {
    testActiveSlide(item);
    testActivePaginator(item)
}

function testNextSlide() {
    if (testActiveIndex == testSlides.length-1) {
        testActiveIndex = 0;
        testCurrentSlide(testActiveIndex);
    } else {
        testActiveIndex++;
        testCurrentSlide(testActiveIndex);
    }
}

function testPrevSide() {
    if(testActiveIndex == 0){
        testActiveIndex = testSlides.length-1
        testCurrentSlide(testActiveIndex);
    } else {
        testActiveIndex--;
        testCurrentSlide(testActiveIndex);
    }
}
// Переоистывание слайдов

testDots.forEach(function(item, indexDot) {
    item.addEventListener('click', function() {
         testActiveIndex = indexDot;
         testCurrentSlide(testActiveIndex);
    })
})

setInterval(testNextSlide, 5000);

// Latest news slider

const newsSlides = document.querySelectorAll('.news__item'),
newsDots  = document.querySelectorAll('.latest-news__item'),
newsActiveIndex = 0;

function newsActiveSlide(n) {
    for(slide of newsSlides) {
        slide.classList.remove('active-slide-team');
    } 
    newsSlides[n].classList.add('active-slide-team');
}

function newsAvctiveDot(n) {
    for(dot of newsDots) {
        dot.classList.remove('active-paginator');
    }
    newsDots[n].classList.add('active-paginator')
}

function newsActiveItem(item) {
    newsActiveSlide(item);
    newsAvctiveDot(item);
}

function newsNextSlide() {
    if( newsActiveIndex == newsSlides.length-1) {
        newsActiveIndex = 0;
        newsActiveItem(newsActiveIndex);
    } else {
        newsActiveIndex ++;
        newsActiveItem(newsActiveIndex);
    }
}

function newsPrevSlide() {
    if(newsActiveIndex == 0) {
        newsActiveIndex = newsSlides.length-1;
    } else {
        newsActiveIndex --;
        newsActiveItem(newsActiveIndex);
    }
}

newsDots.forEach(item, )