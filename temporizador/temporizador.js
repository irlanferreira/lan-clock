var hora = minuto = segundo = 0
var intervalo = ''
var contando = false
var jaPausado = false

function formatar(i){
    let input = document.getElementsByClassName('inputNumero')[i]
    if(input.value > 59){
        alert('O valor inserido não pode exceder 59.')
        input.value = 00
    }
    if(input.value.length > 2){
        alert("Não deixe 0's alheios.")
        input.value = 00
    }else if(input.value < 60){
        return true
    }
}
function contagem(){
    segundo --
    if(segundo < 0){
        minuto --
        segundo = 59
        if(minuto < 0){
            hora --
            if(hora < 0){
                console.log('cabou')
                clearInterval(intervalo)
                contando = false
                if(window.Notification&&Notification.permission !== 'denied'){
                    Notification.requestPermission(function(status){
                        let n = new Notification('Lan Clock', {
                            body:'O temporizador zerou.'
                        })
                    })
                }
                redefinir()
            }else{
                minuto = 59
            } 
        }
    }
    if(hora > -1){
        divTempo.innerHTML = (hora < 10 ? `0${hora}` : hora) + ':' + (minuto < 10 ? `0${minuto}` : minuto) + ':' + (segundo < 10 ? `0${segundo}` : segundo)
    }
}
function iniciar(){
    if(contando == false){
        if(jaPausado == false){
            hora = Number(document.getElementById('inputHora').value)
            minuto = Number(document.getElementById('inputMinuto').value)
            segundo = Number(document.getElementById('inputSegundo').value)
        }

        if(hora == 0 && minuto == 0 && segundo == 0){
            alert('Os valores não podem estar vazios.')
        }else{
            divTempo.innerHTML = (hora < 10 ? `0${hora}` : hora) + ':' + (minuto < 10 ? `0${minuto}` : minuto) + ':' + (segundo < 10 ? `0${segundo}` : segundo)
            intervalo = setInterval(contagem, 1000)
            contando = true
        }
    }
}
function pausar(){
    clearInterval(intervalo)
    contando = false
    jaPausado = true
}
function redefinir(){
    window.location.reload()
}