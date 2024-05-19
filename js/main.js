// при нажатии на ДНС убирает верхнюю панельку
$(".logo").on("click", function () {
    $('.div-one').css("display", "none")
})

// Нажимая на профиль 
$('.account').on("click", function () {
    // Показывает включено меню или выключено
    // И записывает это в переменную menuStatus 
    var menuStatus = $(".notises-wrap").css("display")

    // Если меню включено
    if (menuStatus == "flex") {
        // Выключает меню
        $(".notises-wrap").css("display", "none")
    }
    else {
        // Включает меню
        $(".notises-wrap").css("display", "flex")
    }
})

// Нажимая на экран ( все под верхней панелькой) 
$('.main').on("click", function () {
    // Выключает меню
    $('.notises-wrap').css("display", "none")
})

// Анимация загрузки сайта
// При готовности документа
$(document).ready(function () {

    let allTime = 1900
    // загрузка доходит до 100%
    $(".loading-inner").css("width", "100%")
    $(".loading-inner").css("transition", allTime + "ms")

    // через allTime секунды 
    setTimeout(function () {
        //лоадинг врап пропал
        $(".loading-wrap").css("opacity", "0")
        $(".loading-wrap").css("visibility", "hidden")
    }, allTime);

    // еще на пол секунды позже 
    setTimeout(function () {
        // страница появляеться
        $(".main").css("opacity", "1")
        $(".div-one").css("opacity", "1")
    }, allTime + 500);

})






