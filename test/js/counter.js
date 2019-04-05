var date = new Date();

function timer(_time, _call) {

    timer.lastCall = _call
    timer.lastTime = _time
    timer.timerInterval = setInterval(function () {
        _call(_time[0], _time[1], _time[2]);
        _time[2]--
        if (_time[0] == 0 && _time[1] == 0 && _time[2] == 0) {
            timer.pause()
            _call(0, 0, 0);
        }
        if (_time[2] == -1) {
            _time[2] = 59
            _time[1]--
            if (_time[1] == -1) {
                _time[1] = 59
                _time[0]--
            }
        }
        timer.lastTime = _time
    }, 1000)
}
timer.pause = function () {
    clearInterval(timer.timerInterval)
}
timer.start = function () {
    timer(timer.lastTime, timer.lastCall)
}

var a = document.getElementsByClassName('inner-counter');
timer([23 - date.getHours(), 59 - date.getMinutes(), 60 - date.getSeconds()], function (h, m, s) {
    if(h<10){
        a[0].innerHTML = "<span>0" + h + "</span>" + "<p>Часов</p>";
        a[3].innerHTML = a[0].innerHTML;
    }
    else{
        a[0].innerHTML = "<span>" + h + "</span>" + "<p>Часов</p>";
        a[3].innerHTML = a[0].innerHTML;
    }
    if(m<10){
        a[1].innerHTML = "<span>0" + m + "</span>" + "<p>Часов</p>";
        a[4].innerHTML = a[1].innerHTML;
    }
    else{
        a[1].innerHTML = "<span>" + m + "</span>" + "<p>Часов</p>";
        a[4].innerHTML = a[1].innerHTML;
    }
    if(s<10){
        a[2].innerHTML = "<span>0" + s + "</span>" + "<p>Часов</p>";
        a[5].innerHTML = a[2].innerHTML;
    }
    else{
        a[2].innerHTML = "<span>" + s + "</span>" + "<p>Часов</p>";
        a[5].innerHTML = a[2].innerHTML;
    }
})

timer.pause()
timer.start()
