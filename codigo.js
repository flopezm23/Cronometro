let hr = min = sec = ms = "0" + 0, startTimer;

const iniciarBtn = document.querySelector(".iniciar");
const detenerBtn = document.querySelector(".detener");
const reiniciarBtn = document.querySelector(".reiniciar");

iniciarBtn.addEventListener("click", iniciar);
detenerBtn.addEventListener("click", detener);
reiniciarBtn.addEventListener("click", reiniciar);

function iniciar() {
    iniciarBtn.classList.add("activar");
    detenerBtn.classList.remove("pararActivar");

    startTimer = setInterval(() => {
        ms++;
        ms = ms < 10 ? "0" + ms : ms;

        if (ms == 100) {
            sec++;
            sec = sec < 10 ? "0" + sec : sec;
            ms = "0" + 0;
        }
        if (sec == 60) {
            min++;
            min = min < 10 ? "0" + min : min;
            sec = "0" + 0;
        }
        if (min == 60) {
            hr++;
            hr = hr < 10 ? "0" + hr : hr;
            min = "0" + 0;
        }

        putValue();

    }, 10);
}

function detener() {
    iniciarBtn.classList.remove("activar");
    detenerBtn.classList.remove("pararActivar");
    clearInterval(startTimer);
}

function reiniciar() {
    iniciarBtn.classList.remove("activar");
    detenerBtn.classList.remove("pararActivar");
    clearInterval(startTimer);
    hr = min = sec = ms = "0" + 0;
    putValue();
}

function putValue() {
    document.querySelector('.milisegundos').innerHTML = ms;
    document.querySelector('.segundo').innerHTML = sec;
    document.querySelector('.minuto').innerHTML = min;
    document.querySelector('.hora').innerHTML = hr;
}   