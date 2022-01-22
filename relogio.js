mostrarHora = document.getElementById('horario')
display = document.querySelector('div#display')

if(1 == 1){
    let dataAtual = new Date()
    let hora = dataAtual.getHours()
    let minutos = dataAtual.getMinutes()
    let segundos = dataAtual.getSeconds()
    let horario = ''
    if(hora < 10){
        horario += `0${hora}`
    }else{
        horario += hora
    }
    if(minutos < 10){
        horario += `:0${minutos}`
    }else {
        horario += `:${minutos}`
    }
    if(segundos < 10){
        horario += `:0${segundos}`
    }else{
        horario += `:${segundos}`
    }
    mostrarHora.innerHTML = horario
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function atualizarHora(){
    let dataAtual = new Date()
    let hora = dataAtual.getHours()
    let minutos = dataAtual.getMinutes()
    let segundos = dataAtual.getSeconds()
    let horario = ''
    if(hora < 10){
        horario += `0${hora}`
    }else{
        horario += hora
    }
    if(minutos < 10){
        horario += `:0${minutos}`
    }else {
        horario += `:${minutos}`
    }
    if(segundos < 10){
        horario += `:0${segundos}`
    }else{
        horario += `:${segundos}`
    }
    mostrarHora.innerHTML = horario
}

function definirImagem(div){
    let data = new Date()
    let hora = data.getHours()
    numeroImagem = randomNumber(0, 4)

    if(hora > 4 && hora < 12){
        div.style.backgroundImage = `url('imagens/manha/manha${numeroImagem}.jpg')`
    }else if(hora >= 12 && hora < 18){
        div.style.backgroundImage = `url('imagens/tarde/tarde${numeroImagem}.jpg')`
    }else{
        div.style.backgroundImage = `url('imagens/noite/noite${numeroImagem}.jpg')`
    }
}
definirImagem(display)
setInterval(atualizarHora, 1000)