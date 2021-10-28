var data = '2021/11/30';
var falta = (new Date(data).getTime() - new Date().getTime()) / 1000;
var segundos = Math.round(falta % 60);
var minutos = Math.round(falta / 60 % 60);
var horas = Math.round(falta / 60 / 60 % 24);
var dias = Math.round(falta / 60 / 60 / 24);
var divs = document.querySelectorAll('.time');

setInterval(() => {
    if (segundos == 0) {
        segundos = 60;
        minutos--;
    }
    if (minutos == 0) {
        minutos = 60;
        horas--;
    }
    if (horas == 0) {
        horas = 24;
        dias--;
    }
    segundos--;
    var contador = [dias, horas, minutos, segundos].forEach((parcela, i) =>{
        switch(i){
            case 0:
                document.querySelector(".day").innerHTML = 
                    `<h3 class="title-time">${parcela}:</h3>
                    <span class="legend-time">DIAS</span>`;
                break;
            case 1:
                document.querySelector(".hour").innerHTML = 
                    `<h3 class="title-time">${parcela}:</h3>
                    <span class="legend-time">HORAS</span>`;
                break;
            case 2:
                document.querySelector(".minute").innerHTML = 
                    `<h3 class="title-time">${parcela}:</h3>
                    <span class="legend-time">MIN</span>`;
                break;
            case 3:
                document.querySelector(".second").innerHTML = 
                    `<h3 class="title-time">${parcela}</h3>
                    <span class="legend-time">SEG</span>`;
                break;
        }
    });
}, 1000);

window.onload = () =>{
    const navbar = document.querySelector("#navbar");
    const button = document.querySelector("#blue-button");
    const stickyNavbar = navbar.offsetTop;
    const stickyButton = button.offsetTop;
}

window.onscroll = () => {
    console.log(sticky);
    if (window.pageYOffset >= stickyNavbar) {
        navbar.classList.add("sticky");
        button.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
        navbar.classList.remove("reposition-sticky");
    }
    if (window.pageYOffset >= 4000) {
        footer.classList.add("sticky");
        navbar.classList.add("reposition-sticky");
    } else {
        footer.classList.remove("sticky");
        navbar.classList.remove("reposition-sticky");
    }
};

