const ingresetexto = document.querySelector(".input-encriptar");
const mensaje = document.querySelector(".texto-encriptado")
document.getElementById("mostrar").style.display = "none"
document.getElementById("bt-copiar").style.display = "none"

function btencriptar(){
    const textoEncriptado = encriptar(ingresetexto.value);
    mensaje.value = textoEncriptado;
}

function btdesencriptar(){
    const textoDesencriptado = desencriptar(ingresetexto.value);
    mensaje.value = textoDesencriptado;
}

function btcopiar(){
    var contenido = document.querySelector(".texto-encriptado");
    contenido.select();
    document.execCommand("copy");
    document.getElementById("mostrar").value = "";
}


function encriptar(StringParaEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    StringParaEncriptar = StringParaEncriptar.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){
        if (StringParaEncriptar.includes(matrizCodigo[i][0])){
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    document.getElementById("munheco").style.display = "none";
    document.getElementById("mostrar").style.display = "";
    document.getElementById("textoingreso").value = "";
    document.getElementById("bt-copiar").style.display = "";
    }
    return StringParaEncriptar;
}

function desencriptar(StringParaDesencriptar){
    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
    StringParaDesencriptar = StringParaDesencriptar.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){
        if (StringParaDesencriptar.includes(matrizCodigo[i][0])){
            StringParaDesencriptar = StringParaDesencriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    document.getElementById("munheco").style.display = "none";
    document.getElementById("mostrar").style.display = "";
    document.getElementById("textoingreso").value = "";
    document.getElementById("bt-copiar").style.display = "";
    }
    return StringParaDesencriptar;
}

function esValido(c) {
    c = c.charCodeAt(0);
    return (c >= 97 && c <= 122) || (c >= 32 && c<=64); // [a-z ]
  }
  
  function validarEntrada(cadena) {
    for (var i = 0; i < cadena.length; i++) {
      if (!esValido(cadena[i])) {
        break;
      }
    }
    return i == cadena.length;
  }
  
  
  function validarTextarea(elem) {
    var txt = elem.value;
    if (!validarEntrada(txt)) {
      elem.classList.add('invalido');
      // Mostrar mensaje en la alerta
      document.getElementsByClassName("invalido").innerHTML= alert("Caracter no válido");
      // Borrar caracteres
      var borrarcaracter = document.querySelector("#textoingreso");
      borrarcaracter.value = "";
      invisible();
      
      
    } else {
      elem.classList.remove('invalido');
      
    }
 
  }