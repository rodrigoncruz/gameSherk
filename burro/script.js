function respostaBurro() {
  alert("Sherk deve responder se está com medo da situação: se sim digite '1' se não digite '2' ");
  var decisao = prompt("Sherk está com medo?");
  if (decisao == 1) {
    location = "./burro2.html";
  }else if (decisao == 2) {
    location = "./burro4.html";
  }else {
    alert("Ops, alguma coisa não está certa, escolha corretamente, clique no botão 'CLIQUE AQUI PARA DECIDIR");
  }
}

function respostaBurro2() {
  alert("Burro deve decidir se quer continuar o desfio com Sherk: se sim digite '1' se não digite '2' ");
  var decisao = prompt("Burro quer continuar?");
  if (decisao == 1) {
    location = "./burro6.html";
  }else if (decisao == 2) {
    location = "./burro3.html";
  }else {
    alert("Ops, alguma coisa não está certa, escolha corretamente, clique no botão 'CLIQUE AQUI PARA DECIDIR");
  }
}

function respostaBurro3() {
  alert("Burro deve decidir se vai procurar as escadarias: se sim digite '1' se não digite '2' ");
  var decisao = prompt("Burro deve procurar as escadarias?");
  if (decisao == 1) {
    location = "./burro9.html";
  }else if (decisao == 2) {
    location = "./burro7.html";
  }else {
    alert("Ops, alguma coisa não está certa, escolha corretamente, clique no botão 'CLIQUE AQUI PARA DECIDIR");
  }
}

//function respostaBurro4() {
  //alert("Burro deve decidir novamente se vai levar Sherk ao Lord Farquaad: se sim digite '1' se não digite '2' ");
  //var decisao = prompt("Burro deve ir, já que Sherk insistiu?");
  //if (decisao == 1) {
    //location = "./burro6.html";
  //}else if (decisao == 2) {
   // location = "./burro5.html";
  //}else {
    //alert("Ops, alguma coisa não está certa, escolha corretamente, clique no botão 'CLIQUE AQUI PARA DECIDIR");
  //}
//}

function respostaBurro5() {
  alert("Burro bate de frente com o dragão fêmea, e deve decidir se conversa com ela: se sim digite '1' se não digite '2' ");
  var decisao = prompt("Burro deve conversar com o Dragão Fêmea?");
  if (decisao == 1) {
    location = "./gameover.html";
  }else if (decisao == 2) {
    location = "./burro11.html";
  }else {
    alert("Ops, alguma coisa não está certa, escolha corretamente, clique no botão 'CLIQUE AQUI PARA DECIDIR");
  }
}

function respostaBurro6() {
  alert("Dragão cercou o Burro, ele deve decidir se vai conversar: se sim digite '1' se não digite '2' ");
  var decisao = prompt("Burro deve conversar com o Dragão Fêmea?");
  if (decisao == 1) {
    location = "./burro12.html";
  }else if (decisao == 2) {
    location = "./gameover.html";
  }else {
    alert("Ops, alguma coisa não está certa, escolha corretamente, clique no botão 'CLIQUE AQUI PARA DECIDIR");
  }
}

function msg() {
  alert("Parabéns, você terminou o jogo, Sherk salvou a princesa Fiona e o Burro arrumou uma namorada dragão rs - Jogo Desenvolvido por Rodrigo Cruz ");
    location = "../index.html";
}

function proximo() {
    location = "./burro5.html";
}

function proximo2() {
  location = "./burro6.html";
}

function proximo3() {
  location = "./burro10.html";
}

function gameOver() {
    location = "./gameover.html";
    alert("Infelizmente você tomou uma decisão muito errada, clique em 'VOLTAR A PÁGINA INICIAL'");
  }


    