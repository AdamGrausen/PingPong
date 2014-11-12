window.addEventListener('load', function () {
    var clickContainer, teTime, cTime, counter = 0;

    clickContainer = document.getElementById('body');
    // Android 2.2 needs FastClick to be instantiated before the other listeners so that the stopImmediatePropagation hack can work.
    FastClick.attach(clickContainer);

    clickContainer.addEventListener('touchend', function (event) {
        teTime = Date.now();
        counter = counter + 1;
        document.getElementById('counter').innerText = counter;
        document.getElementById('te-time').value = teTime;
        document.getElementById('d-time').value = cTime - teTime;
    }, false);

    clickContainer.addEventListener('click', function (event) {
        cTime = Date.now();

        document.getElementById('c-time').value = cTime;
        testB.style.backgroundColor = clickContainer.style.backgroundColor ? '' : 'YellowGreen';
    }, false);

}, false);