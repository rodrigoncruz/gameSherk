function respostaGato1() {
  alert("Gato de Botas deve decidir se vai embora da cidade: se sim digite '1' se não digite '2' ");
  var decisao = prompt("Gato de Botas deve ir embora?");
  if (decisao == 1) {
    location = "./gato2.html";
  }else if (decisao == 2) {
    location = "./gameover.html";
  }else {
    alert("Ops, alguma coisa não está certa, escolha corretamente, clique no botão 'CLIQUE AQUI PARA DECIDIR");
  }
}

function respostaGato2() {
  alert("Gato de Botas deve decidir se vai roubar o criminoso mais perigoso da cidade: se sim digite '1' se não digite '2' ");
  var decisao = prompt("Gato de Botas deve roubar o criminoso?");
  if (decisao == 1) {
    location = "./gato4.html";
  }else if (decisao == 2) {
    location = "./gato5.html";
  }else {
    alert("Ops, alguma coisa não está certa, escolha corretamente, clique no botão 'CLIQUE AQUI PARA DECIDIR");
  }
}

function respostaGato3() {
  alert("Gato de Botas deve decidir se atravessa a floresta para chegar em outra cidade: se sim digite '1' se não digite '2' ");
  var decisao = prompt("Gato de Botas deve atravessar a floresta?");
  if (decisao == 1) {
    location = "./gato7.html";
  }else if (decisao == 2) {
    location = "./gato6.html";
  }else {
    alert("Ops, alguma coisa não está certa, escolha corretamente, clique no botão 'CLIQUE AQUI PARA DECIDIR");
  }
}

function respostaGato4() {
  alert("Gato de Botas deve decidir se vai atacar o Shrek: se sim digite '1' se não digite '2' ");
  var decisao = prompt("Gato de Botas deve atacar o Shrek?");
  if (decisao == 1) {
    location = "./gato8.html";
  }else if (decisao == 2) {
    location = "./gato11.html";
  }else {
    alert("Ops, alguma coisa não está certa, escolha corretamente, clique no botão 'CLIQUE AQUI PARA DECIDIR");
  }
}

function respostaGato5() {
  alert("Gato de Botas deve decidir se usa sua arma secreta, a carinha fofa: se sim digite '1' se não digite '2' ");
  var decisao = prompt("Gato de Botas deve usar a carinha fofa?");
  if (decisao == 1) {
    location = "./gato9.html";
  }else if (decisao == 2) {
    location = "./gato10.html";
  }else {
    alert("Ops, alguma coisa não está certa, escolha corretamente, clique no botão 'CLIQUE AQUI PARA DECIDIR");
  }
}

function msg() {
  alert("Parabéns, você terminou o jogo, Gato de Botas no seu primeiro encontro com Shrek e Burro teve alguns conflitos, mas se tornaram grande amigos e participaram de grandes aventuras - Jogo Desenvolvido por Rodrigo Cruz ");
    location = "../index.html";
}

function proximo() {
    location = "./gato3.html";
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


    