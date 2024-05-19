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