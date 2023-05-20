//Tela Recuperar senha

const inputRecuperaSenha = document.getElementsByClassName("recuperar-login")[0]

inputRecuperaSenha.addEventListener("focus", () => {

    inputRecuperaSenha.style.background="white"
})

inputRecuperaSenha.addEventListener("blur", () => {

    inputRecuperaSenha.style.background=""
})