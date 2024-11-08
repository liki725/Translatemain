window.addEventListener('scroll', e => {
    let navbar = document.querySelector('nav').classList
    let activeClass = 'navbar_scrolled'

    if (pageYOffset > 400) {
        navbar.add(activeClass)
    } else {
        navbar.remove(activeClass)
    }
})

window.onload = function () {
    setInterval(function () {
        var seconds = new Date().getSeconds();
        document.getElementById('seconds').innerHTML = (seconds < 10 ? '0' : '') + seconds;
        var minutes = new Date().getMinutes();
        document.getElementById('minutes').innerHTML = (minutes < 10 ? '0' : '') + minutes;
        var hours = new Date().getHours();
        document.getElementById('hours').innerHTML = (minutes < 10 ? '0' : '') + hours;
    })
}


var slideInd = 1
showSlides(slideInd)
function plusSlides(n) {
    showSlides(slideInd += n)
}
function currentSlide(n) {
    showSlides(slideInd = n)
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('mySlides')
    var dots = document.getElementsByClassName('dot')
    if (n > slides.length) {
        slideInd = 1
    }
    if (n < 1) {
        slideInd = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '')
    }
    slides[slideInd - 1].style.display = 'block'
    dots[slideInd - 1].className += ' active'
}


if (window.webkitSpeechRecognition) {
    console.log('work')
} else {
    console.log('-')
}

if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResult = true;
    const startBtn = document.getElementById('startButton');
    const output = document.getElementById('output');
    const status = document.getElementById('status');
    startBtn.addEventListener('click', () => {
        recognition.lang = 'ru';
        status.innerText = 'Start recording...';
        recognition.start();
    });
    document.getElementById('stopButton').addEventListener('click', () => { status.innerText = 'Stop recording...'; recognition.stop(); })
    recognition.onresult = function (event) {
        for (let i = event.resultIndex; i < event.results.length; i++) {
            if (event.results[i].isFinal) {
                const recognizedText = event.results[i][0].transcript;
                output.textContent += recognizedText;
            }
        }
    }
}

