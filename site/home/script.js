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

// Data final da contagem regressiva
var countDownDate = new Date("Oct 31, 2024 00:00:00").getTime();

// Atualiza a contagem regressiva a cada 1 segundo
var x = setInterval(function() {

  // Data e hora atuais
  var now = new Date().getTime();

  // Diferença entre a data final e a atual
  var distance = countDownDate - now;

  // Cálculo de dias, horas, minutos e segundos
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Exibe os resultados no elemento HTML com id="countdown"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // Quando a contagem regressiva termina
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "TEMPO ESGOTADO!";
  }
}, 1000);
