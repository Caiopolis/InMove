// Função Tema: escuro/claro
tema.addEventListener("click", () => {
  let tema = document.getElementById("tema");
  let corpo = document.querySelector("body");
  let titulos = document.querySelectorAll("h1");
  let titulos2 = document.querySelectorAll("h2");
  let titulos3 = document.querySelectorAll("h3");
  let titulos4 = document.querySelector("h4");
  let icone_lua = document.getElementById("moon");
  let paragrafos = document.querySelectorAll("p");
  let paragrafos_informa = document.querySelectorAll(".informa");
  let black_hole = document.getElementById("black_hole");
  let rodape = document.querySelector("footer");


  tema.classList.toggle("light");
  black_hole.classList.toggle("light");
  corpo.classList.toggle("light");
  rodape.classList.toggle("light");
  paragrafos_informa.forEach((paragrafos_informa) => {
    paragrafos_informa.classList.toggle("light");
  });
  paragrafos.forEach((paragrafo) => {
    paragrafo.classList.toggle("light");
  });
  titulos.forEach((titulo) => {
    titulo.classList.toggle("light");
  });
  titulos2.forEach((titulo) => {
    titulo.classList.toggle("light");
  });
  titulos3.forEach((titulo) => {
    titulo.classList.toggle("light");
  });
  titulos4.classList.toggle("light");

  if (icone_lua.classList.contains("bi-moon")) {
    icone_lua.classList.remove("bi-moon");
    icone_lua.classList.add("bi-brightness-high");
  } else {
    icone_lua.classList.remove("bi-brightness-high");
    icone_lua.classList.add("bi-moon");
  }
});
// Função Tema: escuro/claro



// Função Comentario
function comentario() {
  let text = document.getElementById("comentario").value;
  let text_conteudo = document.getElementById("comentario");
  let comentario_enviado = document.getElementById("erro_acerto");
  if (text) {
    comentario_enviado.textContent = "Comentario Enviado!";
    comentario_enviado.style.color = "green";
    comentario_enviado.style.fontSize = "12pt";
    text_conteudo.value = "";
  } else {
    comentario_enviado.textContent = "Por Favor ! insira alguma mensagem !";
    comentario_enviado.style.color = "red";
    comentario_enviado.style.fontSize = "12pt";
  }
}
// Função Comentario



// Enviar Formulario
let botão_enviar = document.getElementById("enviar_formulario");
botão_enviar.addEventListener("click", enviar_formulario);
function enviar_formulario() {
  let campos_formulario = document.querySelector("input").value;
  if (campos_formulario) {
    window.alert(
      "Sua inscrição foi enviado, aguarde alguns instantes que iremos retornar com uma ligação ou E-mail, para assim, efetuarmos da maneira mais coexa possivel"
    );
  }
}
// Enviar Formulario
