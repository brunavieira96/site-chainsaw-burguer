
//Tela de Login 

// Captura do input de login

const inputLogin = document.getElementsByClassName("email-input-login")[0]


inputLogin.addEventListener("focus", () => {

    inputLogin.style.background="white"
    

})


inputLogin.addEventListener("blur", () => {

    inputLogin.style.background = ""
    
    })

    // Adiciona classe de "Campo Obrigatório"

    const labelLogin = document.getElementsByClassName("login-label")[0]


    inputLogin.addEventListener("focus", () => {

    
        labelLogin.classList.add("required-popup") 
        
        
    
    })
    
    inputLogin.addEventListener("blur", () => {
    
        
        labelLogin.classList.remove("required-popup")
        
    
    })
  
    

// Captura do input de senha 

const inputSenha = document.getElementsByClassName("senha-input-login")[0]


inputSenha.addEventListener("focus", () => {

    inputSenha.style.background="white"
    
})

inputSenha.addEventListener("blur", () => {

    inputSenha.style.background=""
})















