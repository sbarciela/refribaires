window.addEventListener("load", function(){

/*calculadora*/

let calculadora = document.getElementById("calculadoraform");
let altura = document.getElementById("altura");
let extension = document.getElementById("extension");
let profundidad = document.getElementById("profundidad");
let tipoclima = document.getElementById("clima");
let contenedor = document.getElementById("resultado-container")
let resultadoFrigorias = document.getElementById("resultado-frigorias");
let linkTienda = document.getElementById("link");


if(calculadora){
    calculadora.addEventListener("submit", function(e){
        e.preventDefault()
        /*definiendo valor del clima*/
        let clima 
            if(tipoclima.value==1){
                clima=50
            }else if(tipoclima.value==2){
                clima=60
            }else if(tipoclima.value==3){
                clima=70
            }else{
                clima=1
            }
        
        /*calculo*/
        let resultado = altura.value * extension.value * profundidad.value * clima;
       
        let url
            if (resultado<4000) {
            
                url=`<a href="https://www.refribaires.com.ar/aires-acondicionados/frigocalorias/2000-3000-fc/" class="text-decoration-none">
                        <button class="boton-resultado"><span class="text-buton-result">Ver equipos</span></button>
                    </a>`    
            }else if (resultado>=4000 && resultado <=6000){
                url=`<a href="https://www.refribaires.com.ar/aires-acondicionados/frigocalorias/4000-6000-fc/" class="text-decoration-none">
                        <button class="boton-resultado"><span class="text-buton-result">Ver equipos</span></button>
                    </a>`
            }else if(resultado>6000){
                url=`<a href="https://www.refribaires.com.ar/aires-acondicionados/frigocalorias/6000-fc/" class="text-decoration-none">
                        <button class="boton-resultado"><span class="text-buton-result">Ver equipos</span></button>
                     </a>`
            }
    
        /*mostrando resultado */
        contenedor.classList.remove("d-none")
        resultadoFrigorias.innerText=resultado;
        linkTienda.innerHTML=url
        altura.value=null
        extension.value=null
        profundidad.value=null
        
    /*calculadora end */  
        
    })

}







/*slideshow servicios*/
const services=document.getElementById("services")
const prevButn = document.querySelector(".prev1");
const nextButn = document.querySelector(".next1");
const dot3 = document.querySelector("#dot3");
const dot4 = document.querySelector("#dot4");
const dot5 = document.querySelector("#dot5");
const dot6 = document.querySelector("#dot6");

if(services){
    var slideIndexservices = 1;
showSlidesservices(slideIndexservices);

function plusSlidesservices(n) {
    showSlidesservices(slideIndexservices += n);
}
function avanzarslider(){
    return plusSlidesservices(1)
}

    
function currentSlideservices(n) {
    showSlidesservices(slideIndexservices = n);
}

prevButn.addEventListener("click",function(){
    plusSlidesservices(-1)
})

nextButn.addEventListener("click",function(){
    plusSlidesservices(1)
})

dot3.addEventListener("click",function(){
    currentSlideservices(1)
})

dot4.addEventListener("click",function(){
    currentSlideservices(2)
})
dot5.addEventListener("click",function(){
    currentSlideservices(3)
})
dot6.addEventListener("click",function(){
    currentSlideservices(4)
})

    
function showSlidesservices(n) {
    var y;
    var slides = document.getElementsByClassName("mySlides1");
    var dots = document.getElementsByClassName("indicator");
    if (n > slides.length) {slideIndexservices = 1}
    if (n < 1) {slideIndexservices = slides.length}
    for (y = 0; y < slides.length; y++) {
        slides[y].style.display = "none";
    }
    for (y = 0; y < dots.length; y++) {
        dots[y].className = dots[y].className.replace(" actives", "");
    }
    slides[slideIndexservices-1].style.display = "block";
    dots[slideIndexservices-1].className += " actives";
} 
setInterval(avanzarslider,4000)


}


/*carrusel main*/

const backbtn = document.querySelector(".back");
const gobtn = document.querySelector(".go");
const bullet1 = document.querySelector("#bullet1");
const bullet2 = document.querySelector("#bullet2");
const bullet3 = document.querySelector("#bullet3");


const carrusel = document.querySelector(".carrusel");

if(carrusel){

var slideIndexcarrusel = 1;
showSlidescarrusel(slideIndexcarrusel);

function plusSlidescarrusel(n) {
    showSlidescarrusel(slideIndexcarrusel += n);
}

function avanzarcarrusel(){
    return plusSlidescarrusel(1)
}
    
function currentSlidecarrusel(n) {
    showSlidescarrusel(slideIndexcarrusel = n);
}

backbtn.addEventListener("click",function(){
    plusSlidescarrusel(-1)
})

gobtn.addEventListener("click",function(){
    plusSlidescarrusel(1)
})

bullet1.addEventListener("click",function(){
    currentSlidecarrusel(1)
})

bullet2.addEventListener("click",function(){
    currentSlidecarrusel(2)
})

bullet3.addEventListener("click",function(){
    currentSlidecarrusel(3)
})


    
function showSlidescarrusel(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidescar");
    var dots = document.getElementsByClassName("bullets");
    if (n > slides.length) {slideIndexcarrusel = 1}
    if (n < 1) {slideIndexcarrusel = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" actives", "");
    }
    slides[slideIndexcarrusel-1].style.display = "block";
    dots[slideIndexcarrusel-1].className += " actives";
    
} 
setInterval(avanzarcarrusel,5000)
}   


















})