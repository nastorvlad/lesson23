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