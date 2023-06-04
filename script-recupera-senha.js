//Tela Recuperar senha

const inputRecuperaSenha = document.getElementsByClassName("recuperar-login")[0]

inputRecuperaSenha.addEventListener("focus", () => {

    inputRecuperaSenha.style.background="white"
})

inputRecuperaSenha.addEventListener("blur", () => {

    inputRecuperaSenha.style.background=""
})


const recuperaHelper = document.getElementsByClassName("helper-text-login")[0];

inputRecuperaSenha.addEventListener("change", (event) => {

    const value = event.target.value;

    if (value.length > 0 && value.length < 8) {

        inputRecuperaSenha.classList.remove("correct")
        inputRecuperaSenha.classList.add("error");
        recuperaHelper.innerText = `O login precisa ser um e-mail e ter mais de 8 caracteres`
        recuperaHelper.classList.add("visible")

  

    } else if (value.length == 0) {

        inputRecuperaSenha.classList.remove("error")
        inputRecuperaSenha.classList.remove("correct")
        recuperaHelper.classList.remove("visible")
        

    } else {

        inputRecuperaSenha.classList.remove("error")
        inputRecuperaSenha.classList.add("correct")
        recuperaHelper.classList.remove("visible")
        
 
    }

})



