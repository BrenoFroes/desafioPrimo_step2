// Variaveis para animacao do navbar
const navbar = document.querySelector("#navbar");
const button = document.querySelector("#button-blue");
let buttonFixed = document.querySelector("#button-blue-fixed");
const col = document.querySelector(".col-12");
const stickyNavbar = navbar.offsetTop;
const stickyButton = button.offsetTop;

window.onscroll = () => {
    let windowY = window.pageYOffset;
    if (windowY == 0) {
        navbar.classList.remove("sticky");
    }
    // Se a tela for grande
    if(window.screen.width >= 991){
        if (windowY >= stickyNavbar) {
            navbar.classList.add("sticky");
            if (windowY >= 4000) {
                footer.classList.add("sticky");
                navbar.classList.add("reposition-sticky");
            } else {
                footer.classList.remove("sticky");
                navbar.classList.remove("reposition-sticky");
            }
        } else {
            navbar.classList.remove("sticky");
            navbar.classList.remove("reposition-sticky");
        }
    // Se a tela for pelo menos média
    } else {
        if (windowY >= stickyButton -555) {
            col.classList.add("col-0");
            buttonFixed.style.display = "flex";
            footer.classList.remove("sticky");
            navbar.classList.remove("reposition-sticky");
            navbar.classList.remove("bg-black");
    
        } else {
            col.classList.remove("col-0");
            buttonFixed.style.display = "none";
            navbar.classList.add("bg-black");
            navbar.classList.remove("reposition-sticky");
        }
    }
    
    
};

setInterval(() => {
    const data = '2021/11/30';
    let falta = (new Date(data).getTime() - new Date().getTime()) / 1000;
    let segundos = Math.round(falta % 60);
    let minutos = Math.round(falta / 60 % 60);
    let horas = Math.round(falta / 60 / 60 % 24);
    let dias = Math.round(falta / 60 / 60 / 24);
    let divs = document.querySelectorAll('.time');
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
    let contador = [dias, horas, minutos, segundos].forEach((parcela, i) =>{
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


