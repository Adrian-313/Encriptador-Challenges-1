const textArea = document.querySelector(".text_area");
const mensaje = document.querySelector(".text-resultado");
const titulo  = document.querySelector(".titulo");
const parrafo = document.querySelector(".parrafo");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

//Encriptar
function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    titulo.remove();
    parrafo.remove();
}

function encriptar( stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }

    }
    return stringEncriptado
}

//Desencriptar
function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    titulo.remove();
    parrafo.remove();
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]]
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][0])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }

    }
    return stringDesencriptado
}

//Copiar
function copiar(){
    var copy = mensaje;
    copy.select();
    copy.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copy.value);
    alert("Copiaste el texto: " + copy.value);
}


