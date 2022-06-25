var displayElm = document.getElementsByClassName('display')[0];
var timer = null;

var startButton = document.getElementsByClassName('startButton')[0];
startButton.addEventListener('click', function() {
    console.log('start');
    var seconds = 0;
    timer = setInterval(function(){
        seconds++;
        displayElm.innerHTML = seconds;
        console.log(seconds);
    }, 1000);
});

var stopButton = document.getElementsByClassName('stopButton')[0];
stopButton.addEventListener('click', function() {
    clearInterval(timer);
    timer = null;
});
