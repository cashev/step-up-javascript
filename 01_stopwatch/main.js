function stopWatch(options) {
    // 見た目
    options = options || {};
    const color = options.color || 'lightblue';
    const backgroundColor = options.backgroundColor || 'black';
    const displayElm = document.getElementsByClassName('display')[0];
    displayElm.style.color = color;
    displayElm.style.backgroundColor = backgroundColor;
    const logElm = document.querySelector('.log');
    // タイマーを保持する
    let timer = null;

    // 開始ボタン
    const startButton = document.getElementsByClassName('startButton')[0];
    startButton.addEventListener('click', function() {
        if (timer !== null) {
            return;
        }
        console.log('start');
        let seconds = 0;
        timer = setInterval(function(){
            seconds++;
            displayElm.innerHTML = seconds;
            console.log(seconds);
        }, 1000);
        addMessage('開始');
    });

    // 終了ボタン
    const stopButton = document.getElementsByClassName('stopButton')[0];
    stopButton.addEventListener('click', function() {
        if (timer === null) {
            return;
        }
        clearInterval(timer);
        timer = null;
        addMessage('終了');
    });

    // ログを表示する
    function addMessage(message) {
        const messageElm = document.createElement('div');
        const now = new Date();
        messageElm.innerText = `${now.getHours()}時${now.getMinutes()}分${now.getSeconds()}秒 ${message}`;
        messageElm.classList = ['message'];
        logElm.appendChild(messageElm);
    }
}

const options = {
    color: 'limegreen',
    backgroundColor: '#333',
};
stopWatch(options);
// stopWatch();
