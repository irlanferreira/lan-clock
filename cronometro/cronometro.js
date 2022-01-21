dataa = new Date()
console.log(dataa.getHours())

numeros = document.querySelector('p#numeracao')
hh = mm = ss = 0
contando = false
numeroAtual = ''

class ContagemSalva {
    constructor(tempodt){
        this.tempo = tempodt
        dataAtual = new Date()
        this.data = `${dataAtual.getDate()}/${dataAtual.getMonth() ++}/${dataAtual.getFullYear()}`
        this.horario = ``
    }
}

function contagem(){
    ss++
    if(ss == 60){
        mm++
        ss = 0
        if(mm == 60){
            hh++
            mm = 0
        }
    }
    var numeroAtual = (hh < 10 ? `0${hh}` : hh) + ':' + (mm < 10 ? `0${mm}` : mm) + ':' + (ss < 10 ? `0${ss}` : ss)
    numeros.innerHTML = numeroAtual
}
function iniciar(){
    if(contando == false){
        numeros.innerHTML = '00:00:00'
        contagemIntervalo = setInterval(contagem, 1)
        contando = true
    }
}
function pausar(){
    clearInterval(contagemIntervalo)
    contando = false
}
function zerar(){
    hh = mm = ss = 0
    clearInterval(contagemIntervalo)
    contando = false
    numeros.innerHTML = "00:00:00"
}