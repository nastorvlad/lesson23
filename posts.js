// получили высоту блока в самом начале работы страницы
var initialHeight = $(".div-two").css("height")
initialHeight = Number(initialHeight.slice(0, -2))
// фикс на высоту (записали начальную высоту как высоту)
$(".div-two").css("height", initialHeight)

// При клике на блок .div-two
$(".galka").on("click", function () {
    // в height записываем высоту блока отрезаем "px" в конце
    var height = $(".div-two").css("height")
    height = Number(height.slice(0, -2))

    // если блок маленький
    if (height < initialHeight) {
        // делаем блок большим
        $(".div-two").css("height", initialHeight)
        $(".div-two").css("padding-bottom", "2em")
    }
    // иначе
    else {
        // делает блок маленьким
        $(".div-two").css("height", "45px")
        $(".div-two").css("padding-bottom", "0px")
    }
})

// при клике по сердечку
$(".heart").on("click", function () {
    // узнаем что написанно в likes
    var likes = $(".likes").text()
    // лайки увеличиваются на 1
    likes = Number(likes) + 1
    // в счетчик на сайте записывается количество лайков
    $(".likes").text(likes)
    // количество лайков записывается в хранилище 
    localStorage.setItem("счетчик", likes);
})

// когда включают сайт
$(document).ready(function () {
    // узнаем сколько лайков из хранилища
    var likes2 = localStorage.getItem("счетчик")
    // выводим на сайт количество лайков из хранилища
    $(".likes").text(likes2)
})
