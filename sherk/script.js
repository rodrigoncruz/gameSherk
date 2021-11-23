function respostaSherk1() {
  alert("Shrek deve expulsar todos os invasores? se sim digite '1' se não digite '2' ");
  var decisao = prompt("Shrek deve expulsar?");
  if (decisao == 1) {
    location = "./sherk3.html";
  }else if (decisao == 2) {
    location = "./sherk4.html";
  }else {
    alert("Ops, alguma coisa não está certa, escolha corretamente, clique no botão 'CLIQUE AQUI PARA DECIDIR");
  }
}

function respostaSherk2() {
  alert("burro deve decidir se vai levar Shrek ao Lord Farquaad: se sim digite '1' se não digite '2' ");
  var decisao = prompt("Burro deve ir?");
  if (decisao == 1) {
    location = "./sherk6.html";
  }else if (decisao == 2) {
    location = "./sherk5.html";
  }else {
    alert("Ops, alguma coisa não está certa, escolha corretamente, clique no botão 'CLIQUE AQUI PARA DECIDIR");
  }
}

function respostaSherk3() {
  alert("burro deve decidir novamente se vai levar Shrek ao Lord Farquaad: se sim digite '1' se não digite '2' ");
  var decisao = prompt("Burro deve ir, já que Shrek insistiu?");
  if (decisao == 1) {
    location = "./sherk6.html";
  }else if (decisao == 2) {
    location = "./sherk5.html";
  }else {
    alert("Ops, alguma coisa não está certa, escolha corretamente, clique no botão 'CLIQUE AQUI PARA DECIDIR");
  }
}

function respostaSherk4() {
  alert("burro deve decidir novamente se vai levar Shrek ao Lord Farquaad: se sim digite '1' se não digite '2' ");
  var decisao = prompt("Burro deve ir, já que Shrek insistiu?");
  if (decisao == 1) {
    location = "./sherk6.html";
  }else if (decisao == 2) {
    location = "./sherk5.html";
  }else {
    alert("Ops, alguma coisa não está certa, escolha corretamente, clique no botão 'CLIQUE AQUI PARA DECIDIR");
  }
}

function respostaSherk5() {
  alert("Shrek recebe uma proposta, salvar a princesa e terá sua paz de volta no pântano: se sim digite '1' se não digite '2' ");
  var decisao = prompt("Shrek deve ir salvar a princesa?");
  if (decisao == 1) {
    location = "./sherk10.html";
  }else if (decisao == 2) {
    location = "./sherk9.html";
  }else {
    alert("Ops, alguma coisa não está certa, escolha corretamente, clique no botão 'CLIQUE AQUI PARA DECIDIR");
  }
}

function msg() {
  alert("Parabéns, você terminou o jogo, Shrek e Burro chegaram ao castelo da Princesa Fiona, para continar jogue com o Burro - Jogo Desenvolvido por Rodrigo Cruz ");
    location = "../index.html";
}

function proximo() {
    location = "./sherk7.html";
}

function proximo2() {
  location = "./sherk8.html";
}

function proximo3() {
  location = "./sherk8.html";
}

function proximo4() {
  location = "./sherk11.html";
}

function gameOver() {
    location = "./gameover.html";
    alert("Infelizmente você tomou uma decisão muito errada, clique em 'VOLTAR A PÁGINA INICIAL'");
  }


    