numeros = document.querySelector('p#numeracao')
divSalvos = document.querySelector('div#salvos')
hh = mm = ss = 0
contando = false
numeroAtual = 0
mostrarSalvos()

class ContagemSalva {
    constructor(tempodt){
        this.tempo = tempodt

        let dataAtual = new Date()
        let dia = dataAtual.getDate()
        let mes = dataAtual.getMonth() + 1
        let ano = dataAtual.getFullYear()
        let horas = dataAtual.getHours()
        let minutos = dataAtual.getMinutes()

        this.data = `${(dia < 10 ? `0${dia}` : dia)}/${(mes < 10 ? `0${mes}` : mes)}/${ano}`
        this.horario = `${(horas < 10 ? `0${horas}` : horas) + ':' + (minutos < 10 ? `0${minutos}` : minutos)}`
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
    numeroAtual = (hh < 10 ? `0${hh}` : hh) + ':' + (mm < 10 ? `0${mm}` : mm) + ':' + (ss < 10 ? `0${ss}` : ss)
    numeros.innerHTML = numeroAtual
}
function iniciar(){
    if(contando == false){
        contagemIntervalo = setInterval(contagem, 1000)
        contando = true
    }
}
function pausar(){
    clearInterval(contagemIntervalo)
    contando = false
}
function zerar(){
    hh = mm = ss = 0
    numeroAtual = 0
    clearInterval(contagemIntervalo)
    contando = false
    numeros.innerHTML = "00:00:00"
}
function salvar(){
    divSalvos.innerHTML = ''
    let dado = new ContagemSalva(numeroAtual)
    if(typeof(numeroAtual) == 'number'){
        alert("Você ainda não iniciou uma contagem. Não é possível salvar.")
    }else if(localStorage.getItem('listaSalvos')){
        listaSalvos = JSON.parse(localStorage.getItem('listaSalvos'))
        listaSalvos.unshift(dado)
        localStorage.setItem('listaSalvos', JSON.stringify(listaSalvos))
    }else{
        lista = []
        lista.unshift(dado)
        localStorage.setItem('listaSalvos', JSON.stringify(lista))
    }
    mostrarSalvos()
}
function deletarItem(i){
    let listaSalvos = JSON.parse(localStorage.getItem('listaSalvos'))
    console.log(listaSalvos)
    listaSalvos.splice(i, 1)
    console.log(listaSalvos)
    localStorage.setItem('listaSalvos', JSON.stringify(listaSalvos))

    divSalvos.innerHTML = ''
    mostrarSalvos()
}
function mostrarSalvos(){
    let listaSalvos = JSON.parse(localStorage.getItem('listaSalvos'))
    for(i in listaSalvos){
        divSalvos.innerHTML += `<div id="item">
        <div id="tempo">
            <p>${listaSalvos[i].tempo}</p>
        </div>
        <div style="align-self: flex-end;"><img src="../imagens/lixo.png" alt="Deletar" style="margin-bottom: 33px; margin-left: 65px;" onclick="deletarItem(${i})"></div>
        <div>
            <p>${listaSalvos[i].data}</p>
            <p>às ${listaSalvos[i].horario}</p>
        </div>
    </div>`
    }
}