var abrir = 0
function Lista(){
    var lista = window.document.getElementById("lista")
    if (abrir == 0){
        lista.style.display = "flex"
        abrir = 1
    }else if (abrir == 1){
        lista.style.display = "none"
        abrir = 0
    }
}

function zap(){
    window.location.href = "https://wa.me/5532999820536"
}
function email (){
    window.location.href = "mailto:pirasegmg@gmail.com"
}
function facebook (){
    window.location.href = "https://www.facebook.com/people/Piraseg-Consultoria/100093117411278/?mibextid=ZbWKwL"
}
function piraseg(){
    window.location.href = "https://pirasegmg.formasegead.com.br/"
}