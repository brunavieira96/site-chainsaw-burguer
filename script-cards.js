const cardsLanches = document.getElementsByClassName("cards-lanches")[0]

cardsLanches.addEventListener("mouseover", () => {

    cardsLanches.innerHTML=`<p class="card-texto-lanches-js">Acesse o Cardapio</p>`
    cardsLanches.style.background="#f83486"
})

cardsLanches.addEventListener("mouseout", () => {

    cardsLanches.innerHTML=`<img class="imagem-card" src="imagens/burguer-card.png" width="110px">
            
    <p class="card-texto-lanches">Hamburguers</p>`

    cardsLanches.style.background="#db0c39"
})


