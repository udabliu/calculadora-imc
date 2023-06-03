function calculaImc(){
    const altura = document.getElementById("input-altura").value
    const peso = document.getElementById("peso").value
    let resultado = document.getElementById("resultado")
    let descricao = document.getElementById("descricao")
    const imc = (peso /(altura * altura))
    
    // formatar para duas linhas (tofixed())
    resultado.textContent = imc.toFixed(2)

    
    if(imc < 18.5){
        descricao.innerHTML = "ta no crack"
    }
    else if(imc >= 18.5 & imc < 25){
        descricao.innerHTML = "ta normal"
    }
    else if(imc >= 25 & imc < 30){
        descricao.innerHTML = "gordim"
    }
    else if(imc >= 30 & imc < 40){
        descricao.innerHTML = "obesidade"
    }
    else if(imc > 40){
        descricao.innerHTML = "obesidade grau 89"
    }
}

//função para colocar o ponto depois de preencher o campo
const altura = document.getElementById("input-altura")

altura.addEventListener('keypress', () =>{
    let tamanho = altura.value.length

    if(tamanho === 1){
        altura.value += '.'
    }
})

//função para permitir somente entrada de numerais
function somenteNumeros(e) {
    var charCode = e.charCode ? e.charCode : e.keyCode;
    // charCode 8 = backspace   
    // charCode 9 = tab
    if (charCode != 8 && charCode != 9) {
        // charCode 48 equivale a 0   
        // charCode 57 equivale a 9
        if (charCode < 48 || charCode > 57) {
            return false;
        }
    }
}
