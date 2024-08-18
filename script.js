var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var munieco = document.querySelector(".contenedormunieco");
var mensajeNoEncontrado = document.querySelector(".mensaje-no-encontrado");
var mensajeInicial = document.querySelector(".mensaje-inicial");
var contenedorResultado = document.querySelector(".contenedor-resultado");
var btnCopiar = document.querySelector(".btn-copiar");
var alerta = document.querySelector(".alerta p"); 

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar() {
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    if (cajatexto === "") {
        mostrarAlerta('El campo no puede estar vacío.');
    } else if (!validarTexto(cajatexto)) {
        mostrarAlerta('Solo letras minúsculas y sin acentos.');
    } else {
        var textoEncriptado = encriptarTexto(cajatexto);
        mostrarResultado(textoEncriptado);
    }
}

function desencriptar() {
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    if (cajatexto === "") {
        mostrarAlerta('El campo no puede estar vacío.');
    } else if (!validarTexto(cajatexto)) {
        mostrarAlerta('Solo letras minúsculas y sin acentos.');
    } else {
        var textoDesencriptado = desencriptarTexto(cajatexto);
        mostrarResultado(textoDesencriptado);
    }
}

function recuperarTexto() {
    var cajatexto = document.querySelector(".cajatexto");
    return cajatexto.value.trim(); 
}

function ocultarAdelante() {
    munieco.classList.add("ocultar");
    mensajeNoEncontrado.classList.add("ocultar");
    mensajeInicial.classList.add("ocultar");
    contenedorResultado.classList.add("ocultar");
    btnCopiar.classList.add("ocultar");
}

function mostrarResultado(texto) {
    contenedorResultado.classList.remove("ocultar");
    document.querySelector(".texto-resultado").textContent = texto;
    btnCopiar.classList.remove("ocultar");
}

function encriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";
    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal += "ai";
        } else if (texto[i] == "e") {
            textoFinal += "enter";
        } else if (texto[i] == "i") {
            textoFinal += "imes";
        } else if (texto[i] == "o") {
            textoFinal += "ober";
        } else if (texto[i] == "u") {
            textoFinal += "ufat";
        } else {
            textoFinal += texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";
    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a" && texto.substr(i, 2) == "ai") {
            textoFinal += "a";
            i++;
        } else if (texto[i] == "e" && texto.substr(i, 5) == "enter") {
            textoFinal += "e";
            i += 4;
        } else if (texto[i] == "i" && texto.substr(i, 4) == "imes") {
            textoFinal += "i";
            i += 3;
        } else if (texto[i] == "o" && texto.substr(i, 4) == "ober") {
            textoFinal += "o";
            i += 3;
        } else if (texto[i] == "u" && texto.substr(i, 4) == "ufat") {
            textoFinal += "u";
            i += 3;
        } else {
            textoFinal += texto[i];
        }
    }
    return textoFinal;
}

function validarTexto(texto) {
    var regex = /^[a-z\s]*$/; 
    return regex.test(texto);
}

function mostrarAlerta(mensaje) {
    alerta.textContent = mensaje;
    alerta.parentElement.classList.remove("ocultar"); 
}

btnCopiar.addEventListener("click", () => {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
});
