
//Tela de Login 

// Captura do input de login

const inputLogin = document.getElementsByClassName("email-input-login")[0]


inputLogin.addEventListener("focus", () => {

    inputLogin.style.background="white"
   

})


inputLogin.addEventListener("blur", () => {

    inputLogin.style.background = ""
    
    })


  
    

// Captura do input de senha 

const inputSenha = document.getElementsByClassName("senha-input-login")[0]


inputSenha.addEventListener("focus", () => {

    inputSenha.style.background="white"
   
    
})

inputSenha.addEventListener("blur", () => {

    inputSenha.style.background=""
})




// Validar valor do input login

const loginHelper = document.getElementsByClassName("helper-text-login")[0];

inputLogin.addEventListener("change", (event) => {

    const value = event.target.value;

    if (value.length > 0 && value.length < 8) {

        inputLogin.classList.remove("correct")
        inputLogin.classList.add("error");
        loginHelper.innerText = `O login precisa ser um e-mail e ter mais de 8 caracteres`
        loginHelper.classList.add("visible")

  

    } else if (value.length == 0) {

        inputLogin.classList.remove("error")
        inputLogin.classList.remove("correct")
        loginHelper.classList.remove("visible")
        

    } else {

        inputLogin.classList.remove("error")
        inputLogin.classList.add("correct")
        loginHelper.classList.remove("visible")
        
 
    }

})


// Validar valor do input senha

const labelSenha = getElementsByClassName=("senha-label")[0];
const senhaHelper = document.getElementsByClassName("helper-text-senha")[0];

inputSenha.addEventListener("change", (event) => {

    const value = event.target.value;

    if (value.length > 0 && value.length < 8) {

        inputSenha.classList.remove("correct")
        inputSenha.classList.add("error");
        senhaHelper.innerText = `A senha precisa ter mais de 8 caracteres`
        senhaHelper.classList.add("visible")
        
        
    

  

    } else if (value.length == 0) {

        inputSenha.classList.remove("error")
        inputSenha.classList.remove("correct")
        senhaHelper.classList.remove("visible")
        

    } else {

        inputSenha.classList.remove("error")
        inputSenha.classList.add("correct")
        senhaHelper.classList.remove("visible")
        
 
    }

})



















