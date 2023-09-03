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