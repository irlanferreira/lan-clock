numeros = document.querySelector('p#numeracao')
contagemHoras = contagemMinutos = contagemSegundos = 0
contando = false

function contagem(){
    if()
}
function iniciar(){
    if(contando == false){
        numeros.innerHTML = '00:00:00'
        contagemIntervalo = setInterval(contagem, 1000)
        contando = true
    }
}