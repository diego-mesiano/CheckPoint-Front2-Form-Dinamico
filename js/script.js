let nome = document.getElementById("nome");
let sinopse = document.getElementById("descricao");
let url = document.getElementById("url");

document.querySelector("form").addEventListener("submit",function(event){
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
  let filmesLocalStorage = JSON.parse(localStorage.getItem("@GERADORCARD"));

  if(filmesLocalStorage) {
    filmesLocalStorage.forEach(filme => arrayFilmes.push(filme));
  } 

  let card = {
    nome,
    url, 
    sinopse
  }

  arrayFilmes.push(card);

  localStorage.setItem('@GERADORCARD', JSON.stringify(arrayFilmes));
  location.reload();
}


function renderizarCard(nome, url, sinopse) {

  let container = document.getElementById("container");
    
<<<<<<< HEAD
  //criando div pai
  let containerCards = document.createElement("div");
  container.appendChild(containerCards);

  //criando o card1
  let card = document.createElement("div");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  let img = document.createElement("img");

  h2.innerHTML = nome;
  img.src = url;
  p.innerHTML = sinopse;

  card.appendChild(h2);
  card.appendChild(p);
  card.appendChild(img);
  containerCards.appendChild(card);
}

window.onload = () => {
  let filmes = localStorage.getItem("@GERADORCARD");
  let arrayFilmes = JSON.parse(filmes);

  console.log(arrayFilmes);

  for(filme of arrayFilmes) {
    renderizarCard(filme.nome, filme.url, filme.sinopse);
  }
}
=======
    let container = document.getElementById("container");
    
    //criando div pai
    let containerCards = document.createElement("div");
    container.appendChild(containerCards);

    //criando o card1
    let card = document.createElement("div");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let img = document.createElement("img");
    card.appendChild(h2);
    card.appendChild(p);
    card.appendChild(img);
    containerCards.appendChild(card);

    validarInputsForm();
})

function validarInputsForm() {
    let nome = document.getElementById("nome");
    let descricao = document.getElementById("descricao");
    let url = document.getElementById("url");
  
    nome.value.trim();
    descricao.value.trim();
    url.value.trim();
  
    descricao.value[0].toUpperCase() + descricao.value.substr(1);
    
} 
>>>>>>> master
