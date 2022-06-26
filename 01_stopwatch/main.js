function addMessage(message) {
    var messageElm = document.createElement('div');
    messageElm.innerText = message;
    logElm.appendChild(messageElm);
}

var displayElm = document.getElementsByClassName('display')[0];
var logElm = document.querySelector('.log');
var timer = null;

var startButton = document.getElementsByClassName('startButton')[0];
startButton.addEventListener('click', function() {
    if (timer !== null) {
        return;
    }
    console.log('start');
    var seconds = 0;
    timer = setInterval(function(){
        seconds++;
        displayElm.innerHTML = seconds;
        console.log(seconds);
    }, 1000);
    addMessage('開始');
});

var stopButton = document.getElementsByClassName('stopButton')[0];
stopButton.addEventListener('click', function() {
    if (timer === null) {
        return;
    }
    clearInterval(timer);
    timer = null;
    addMessage('終了');
});
