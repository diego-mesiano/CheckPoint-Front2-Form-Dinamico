let nome = document.getElementById("name");
let sinopse = document.getElementById("description");
let url = document.getElementById("url");

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  formatarTextos();
  criarObjetoCard(nome.value, url.value, sinopse.value);
})

function formatarTextos() {
  nome.value.trim();
  sinopse.value.trim();
  url.value.trim();

  sinopse.value[0].toUpperCase() + sinopse.value.substr(1);
}

function criarObjetoCard(nome, url, sinopse) {

  arrayFilmes = [];
  let filmesLocalStorage = JSON.parse(localStorage.getItem("@CARDCREATOR"));

  if (filmesLocalStorage) {
    filmesLocalStorage.forEach(filme => arrayFilmes.push(filme));
  }

  let card = {
    nome,
    url,
    sinopse
  }

  arrayFilmes.push(card);

  localStorage.setItem('@CARDCREATOR', JSON.stringify(arrayFilmes));
  location.reload();
}

function renderizarCard(nome, url, sinopse) {

  //criando div pai
  let containerCards = document.getElementById("containerCards");

  //criando o card1
  let card = document.createElement("div");
  let h2 = document.createElement("h2");
  let img = document.createElement("img");
  let p = document.createElement("p");

  h2.innerHTML = nome;
  img.src = url;
  p.innerHTML = sinopse;

  card.appendChild(h2);
  card.appendChild(img);
  card.appendChild(p);
  containerCards.appendChild(card);
}

window.onload = () => {
  let filmes = localStorage.getItem("@CARDCREATOR");
  let arrayFilmes = JSON.parse(filmes);

  console.log(arrayFilmes);

  for (filme of arrayFilmes) {
    renderizarCard(filme.nome, filme.url, filme.sinopse);
  }
}

// Alterar o tema da página
let body = document.querySelector("body");
let checked = 0;

function darkTheme(el, color) {
  if (checked == 0) {
    el.addEventListener("click", function (event) {
      el.style.backgroundColor = "black";
      el.style.color = "rgb(100,100,100)";
    })
    checked = 1;
  }

  else {
    el.addEventListener("click", function (event) {
      el.style.backgroundColor = color;
    })
    checked = 0;
  }
}

//evento de clique do botão Começar de novo
btnClear = document.getElementById("clearLocalStorage");
btnClear.addEventListener('click', (event)=>{
  
  event.preventDefault();
  //retira o scroll
  document. documentElement.style. overflow = 'hidden';
  document.body.style.scroll = "no";
  
  //cria a div q ocupara a tela inteira
  let fundoturvo = document.createElement("div");
  document.body.appendChild(fundoturvo);
  fundoturvo.style.zIndex = 100;
  fundoturvo.style.top = 0;
  fundoturvo.style.position = "absolute"
  fundoturvo.style.minHeight = "100vh";
  fundoturvo.style.maxHeight = "100vh"
  fundoturvo.style.minWidth = "100%"
  fundoturvo.style.maxWidth = "100%"
  fundoturvo.style.backgroundColor = "orangered";
  fundoturvo.style.opacity = "0.9";

  //cria a div com a mensagem e botoes
  let popUp = document.createElement("div");
  fundoturvo.appendChild(popUp);
  popUp.setAttribute("id","popUp");
  popUp.style.zIndex = 101;
  popUp.style.minHeight = "20vh";
  popUp.style.maxHeight = "20vh";
  popUp.style.minWidth = "35%";
  popUp.style.maxWidth = "35%";
  popUp.style.backgroundColor = "black";
  popUp.style.textAlign = "center"
  fundoturvo.style.display = "flex";
  fundoturvo.style.flexDirection = "column";
  fundoturvo.style.justifyContent = "center";
  fundoturvo.style.alignItems = "center";
  popUp.style.borderRadius = "15px";
  let h2 = document.createElement("h2");
  popUp.appendChild(h2);
  h2.setAttribute("id","tituloPopUp")
  h2.innerHTML = "Deseja apagar todos os cards?"
  h2.style.color = "orangered";
  h2.style.marginTop = "6%";
  let btnSim = document.createElement("button");
  let btnNao = document.createElement("button");
  popUp.appendChild(btnSim);
  popUp.appendChild(btnNao);
  btnSim.setAttribute("class","btnSim");
  btnNao.setAttribute("class","btnNao");
  btnSim.innerHTML="Sim";
  btnNao.innerHTML="Não";
  btnSim.style.width = "20%";
  btnNao.style.width = "20%";
  btnSim.style.marginTop = "5%";
  btnNao.style.marginTop = "5%";
  btnSim.style.marginRight = "4%"
  btnSim.style.backgroundColor = "orangered";
  btnSim.style.color = "white";
  btnNao.style.backgroundColor = "orangered";
  btnNao.style.color = "white";

  //evento de click do botão sim
  btnSim.addEventListener('click', ()=>{
    localStorage.removeItem('@CARDCREATOR');
    location.reload();
  })
  
  //evento de clique do botao nao 
  btnNao.addEventListener('click', ()=>{
    location.reload();
  })
})