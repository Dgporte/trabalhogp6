const noticiasDiv = document.getElementById("noticias");
const conteudoDiv = document.querySelector(".main-pag-left-top");

function pausarAnimacao() {
  conteudoDiv.style.animationPlayState = 'paused';
}

function continuarAnimacao() {
  conteudoDiv.style.animationPlayState = 'running';
}

noticiasDiv.addEventListener("mouseover", pausarAnimacao);
noticiasDiv.addEventListener("mouseout", continuarAnimacao);

var countDownDate = new Date("Oct 31, 2024 00:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "TEMPO ESGOTADO!";
  }
}, 1000);
