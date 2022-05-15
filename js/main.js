
var myForm = document.querySelector('.myForm');
var input = document.querySelector('.input');
var div_ota = document.querySelector('.div_ota');
var div_bola = document.querySelector('.div_bola');
var piyodaDivEL = document.querySelector('.span',)
var viliDivEL = document.querySelector('.span1',)
var carDivEL = document.querySelector('.span2',)
var samolyotDivEL = document.querySelector('.span3',)

var a = 3.6
var b = 20.1
var d = 70
var c = 800


myForm.addEventListener('submit', function(event) {
    event.preventDefault();

    piyodaDivEL.textContent  =  Math.floor(input.value / a);
    viliDivEL.textContent = Math.floor(input.value / b);
    carDivEL.textContent = Math.floor(input.value / d);
    samolyotDivEL.textContent = Math.floor(input.value / c) ;

    
})

