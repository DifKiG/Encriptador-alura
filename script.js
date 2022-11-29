const cifrarTexto = document.querySelector(".cifrar");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar() {
    const textoEncriptado = cifrar(cifrarTexto.value)
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none"
    cifrarTexto.value = ""
}
function cifrar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll
                (matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;

}

function btnDesencriptar() {
    const textoEncriptado = Desencriptar(cifrarTexto.value)
    mensaje.value = textoEncriptado;
    cifrarTexto.value = ""
}


function Desencriptar(stringDesencriptada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll
                (matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;


}

function copiar() {
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = ""
    alert("Su texto ha sido copiado");
}