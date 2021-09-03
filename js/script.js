document.querySelector("form").addEventListener("submit",function(event){
    event.preventDefault();
    
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