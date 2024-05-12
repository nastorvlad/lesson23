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

var turbo = 0.1

// каждую секунду
setInterval(function () {

    // прибавляется секунда
    var sec = $(".second").text()
    sec = Number(sec) + 1

    // приписываем ноль к секундам меньше 10
    if (sec < 10) {
        $(".second").text("0" + sec)
    }
    else {
        $(".second").text(sec)
    }

    // если наступила 60-ая секунда
    if (sec == 60) {
        // таймер секунд возобновляется на 0
        $(".second").text("00")

        // получаем мин из текста
        var min = $(".minute").text()
        // прибавляем 1 минуту
        min = Number(min) + 1

        // приписываем ноль к минутам меньше 10
        if (min < 10) {
            $(".minute").text("0" + min)
        }
        else {
            $(".minute").text(min)
        }
    }
    else { }
}, 1000 * turbo);

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

$(".chart").on("click", function () {

    // создает переменную и узнает видно ли калькулятор
    var calculateStatus = $(".calculate-wrap").css("visibility")

    if (calculateStatus == "hidden") {
        // появляется калькулятор
        $(".calculate-wrap").css("visibility", "visible")
    }
    else {
        // пропадает калькулятор
        $(".calculate-wrap").css("visibility", "hidden")
    }

})


$(".number").on("click", function () {
    // this это то куда ты нажимаешь
    console.log("Это THIS == ", this)

    // то что находиться в диве this (это то куда ты нажимаешь)
    console.log("Это THIS.иннерТекст == ", this.innerText)

    // создает переменную цифра и записывает в нее то число,  что находится в том куда нажимаешь
    // цифра -- цифра из кнопки в которую нажали
    var цифра = this.innerText

    // firstNumber -- определяеться что находиться в "первое"
    var firstNumber = $(".pervoe").text() 
    var secondNumber = $(".vtoroye").text()

    // если операция == пустоте (т.е. мы не поставили опреацию)
    if ($(".operation").text() == "") {

        // если сначала стоит ноль то он убираеться и в первое число пишеться цифра
        if(firstNumber == 0)
        {            
            $(".pervoe").text(цифра)
        }
        else{
            // то записываем в первое число
            // записываем в ".первое" то что находиться в первом числе + еще цифра в которую мы нажали       
            $(".pervoe").text(firstNumber + цифра)
        }

    }
    else {
        // если сначала стоит ноль то он убираеться и в второе число пишеться цифра
        if(secondNumber == 0)
        {            
            $(".vtoroye").text(цифра)
        }
        else{
            // то записываем во второе число
            // записываем в ".второе" то что находиться в втором числе + еще цифра в которую мы нажали
            $(".vtoroye").text(secondNumber + цифра)
        }
    }  
})

$(".znak").on("click", function () {
    var цифра = this.innerText
    console.log(цифра)
    $(".operation").text(цифра)
})

$(".ravenstvo").on("click", function () {

    var znak = $(".operation").text()

    // получает и переделывает числа который можно прибавлять
    var firstNumber = Number($(".pervoe").text())
    var secondNumber = Number($(".vtoroye").text())
    var result = 0

    if (znak == "+") {
        // прибавляет числа и записывает в результат
        result = firstNumber + secondNumber
    }

    if (znak == "-") {
        // прибавляет числа и записывает в результат
        result = firstNumber - secondNumber
    }

    if (znak == "*") {
        // прибавляет числа и записывает в результат
        result = firstNumber * secondNumber
    }

    if (znak == "/") {
        // прибавляет числа и записывает в результат
        result = firstNumber / secondNumber
    }

    // записывает в pervoe результат, убирает знак и вторую цифру
    $(".pervoe").text(result)
    $(".operation").text("")
    $(".vtoroye").text("")

})

// при нажатии на сброс убирает все с экрана
$(".reset").on("click", function () {
    $(".pervoe").text("")
    $(".operation").text("")
    $(".vtoroye").text("")
})

// при клике на кнопку назад
$(".nazad").on("click", function () 
{
    var znak = $(".operation").text()
    var vtoroe = $(".vtoroye").text()
    // если znak есть и
    if (znak != "" && vtoroe == "")
    {
        // стираем знак
        стираемОперацию()
    }
    else 
    {
        // если vtoroe не равно пустоте (если второе заполнено)
        if (vtoroe != "") 
        {
            отрезаетВторое()
        }
        else 
        {
            отрезаетПервое()
        }
    }
})

function стираемОперацию() {
    // при стирании операции будет пустота
    $(".operation").text("")
}

function отрезаетПервое() {
    // иначе отрезаем от первое
    // первое число в калькуляторе
    var firstNumber = $(".pervoe").text()
    // отрезает последнее число
    var numberMinus1 = firstNumber.slice(0, -1)
    // выводит в калькулятор отрезаное число
    $(".pervoe").text(numberMinus1)
}

function отрезаетВторое() {
    // то отрезаем от второе
    // второе число в калькуляторе
    var secondNumber = $(".vtoroye").text()
    // отрезает последнее число
    var numberMinus1 = secondNumber.slice(0, -1)
    // выводит в калькулятор отрезаное число
    $(".vtoroye").text(numberMinus1)
}