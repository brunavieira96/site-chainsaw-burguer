
//Card Haburguers


const cardsLanches = document.getElementsByClassName("cards-lanches")[0]

cardsLanches.addEventListener("mouseover", () => {

    cardsLanches.innerHTML=`<p class="card-texto-lanches-js">Acesse o Cardapio</p>`
    cardsLanches.style.background="#f83486"
    
})

cardsLanches.addEventListener("mouseout", () => {

    cardsLanches.innerHTML=`<img class="imagem-card" src="imagens/burguer-card.png" width="110px">
            
    <p class="card-texto-lanches">Lanches</p>`

    cardsLanches.style.background="#db0c39"
})

cardsLanches.addEventListener("click", () => {

    window.location="cardapio-hamburguers.html"
})


//Card Bebidas

const cardBebidas = document.getElementsByClassName("cards-bebidas")[0]

cardBebidas.addEventListener("mouseover", () => {

    cardBebidas.innerHTML=`<p class="card-texto-bebidas-js">Acesse o Cardapio</p>`
    cardBebidas.style.background="#f83486"

})

cardBebidas.addEventListener("mouseout", () => {

    cardBebidas.innerHTML=`<img class="imagem-card" src="imagens/bebidas.png" width="110px">
            
    <p class="card-texto-bebidas">Bebidas</p>`

    cardBebidas.style.background="#db0c39"
})

// Card Sobremesas


const cardSobremesas = document.getElementsByClassName("cards-sobremesas")[0]

cardSobremesas.addEventListener("mouseover", () => {

    cardSobremesas.innerHTML=`<p class="card-texto-sobremesas-js">Acesse o Cardapio</p>`
    cardSobremesas.style.background="#f83486"
})

cardSobremesas.addEventListener("mouseout", () => {

    cardSobremesas.innerHTML=`<img class="imagem-card" src="imagens/sobremesa.png" width="110px"> 
    <p class="card-texto-sobremesas">Sobremesas</p>`
    cardSobremesas.style.background="#db0c39"
})


// Card Pizzas

const cardPizzas = document.getElementsByClassName("cards-pizzas")[0]

cardPizzas.addEventListener("mouseover", () => {

    cardPizzas.innerHTML=`<p class="card-texto-pizzas-js">Acesse o Cardapio</p>`
    cardPizzas.style.background="#f83486"
})

cardPizzas.addEventListener("mouseout", () => {

    cardPizzas.innerHTML=`<img class="imagem-card" src="imagens/pizza.png" width="110px"> 
    <p class="card-texto-pizzas">Pizzas</p>`
    cardPizzas.style.background="#db0c39"
})



