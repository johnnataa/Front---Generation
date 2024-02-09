let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let mensagem = document.querySelector("#mensagem");

nome.style.width = "100%";
email.style.width = "100%";
mensagem.style.width = "100%"

let nomeOk = false;
let emailOk = false;
let mensagemOk = false;
let cepOk = false;

function validarNome() {
  
  let txtNome = document.querySelector("#txtNome");
  
  if (nome.value.length < 3) {
    txtNome.innerHTML = "Nome muito curto!";
    txtNome.style.color = "red";
    nomeOk = false;
  } else {
    txtNome.innerHTML = "✔";
    txtNome.style.color = "green";
    nomeOk = true;
  }
}

function validarEmail() {
  let txtEmail = document.querySelector("#txtEmail");

  if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    txtEmail.innerHTML = "E-mail inválido";
    txtEmail.style.color = "red";
    emailOk = false;
  } else {
    txtEmail.innerHTML = "✔";
    txtEmail.style.color = "green";
    emailOk = true;
  }
}

function validarMensagem() {
  let txtMensagem = document.querySelector("#txtMensagem");

  if (mensagem.value.length >= 100) {
    txtMensagem.innerHTML = "Mensagem muito grande!";
    txtMensagem.style.color = "red";
    mensagemOk = false;
  } else {
    txtMensagem.innerHTML = "✔";
    txtMensagem.style.color = "green";
    mensagemOk = true;
  }
}