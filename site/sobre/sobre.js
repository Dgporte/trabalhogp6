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
