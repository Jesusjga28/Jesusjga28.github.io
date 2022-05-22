function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var navegation = document.querySelector('.navegation');
    menuToggle.classList.toggle('active')
    navegation.classList.toggle('active')
}

function imgSlider(anything){
    document.querySelector('.light').src = anything;
}

function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})
