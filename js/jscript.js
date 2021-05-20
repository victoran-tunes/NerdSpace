//barra desaparecer 
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-190px";
  }
  prevScrollpos = currentScrollPos;
}
/*Função que começa a validar os campos*/
function validar() {
  escrever();
}
/*validação do nome*/
function escrever() {
  var nome = document.getElementById("nome").value;
  var div = document.getElementById("erro");
  var msg_erro;
  if (nome.length <= 2) {
    /*Se o tamanho do campo nome for menor que 2*/
    document.getElementById("nome").focus(); /*Foca no campo nome*/
    msg_erro = "Preencha corretamente o campo nome."; /*Mostra a mensagem de erro*/
  }
  if (nome.length >= 3) {
    /*Se o tamanho do campo nome for maior ou igual a 3*/
    msg_erro = ""; /*deixa a mensagem de erro vazia*/
    document.getElementById("erro").style.display = "none"; /*deixa a mensagem invisivel*/
    mensagem(); /*chama a função para validar o campo de mensagem*/
  } else {
    div.innerHTML = msg_erro;
  }
}
/*validação do campo de mensagem*/
function mensagem() {
  var mensagem = document.getElementById("msg").value;
  var div = document.getElementById("erro2");
  var msg_erro;
  if (mensagem.length <= 10) {/*se o campo de mensagem for menor ou igual a 10*/
    document.getElementById("msg").focus(); /*focar no campo de mensagem*/
    msg_erro = "Preencha corretamente o campo. (Mínimo de 10 caracteres)"; /*mensagem de erro*/
  }
  if (mensagem.length > 10) {
    /*se a mensagem for acima de 10*/
    document.getElementById("erro2").style.display = "none"; /*esconde a mensagem de erro*/
    alert("Sugestão enviada, obrigado!")
    window.document.formnome.submit();
  } else {
    div.innerHTML = msg_erro;
  }
}
//Deixa a página em preto e branco
var isBlackAndWhite = false;

function pretoEBranco() {
  if (isBlackAndWhite) {
    document.getElementById('body').classList.remove('preto-branco');
    isBlackAndWhite = false;
  } else {
    document.getElementById('body').classList.add('preto-branco');
    isBlackAndWhite = true;
  }
}