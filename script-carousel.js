let intervalo = 0

let maxSlider = document.querySelectorAll(".carousel-img").length - 1;



acao();

function acao() {

    let img = document.querySelectorAll(".carousel-img img")

    setInterval(function() {

        img[intervalo].style.display = "none";
        intervalo++;

        if(intervalo > maxSlider){

            intervalo = 0;
        }

        img[intervalo].style.display = "block";

    }, 4000)

    
}

