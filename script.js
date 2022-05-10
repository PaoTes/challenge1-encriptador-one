 //Encriptar
 const botonParaEncriptar = document.querySelector('.btnEncriptar');
 const botonParaDesencriptar = document.querySelector('.btnDesencriptar');
 const botonParaCopiar = document.querySelector('.copiar-contenido');
 const inputTexto = document.querySelector(".input-text");
 const mostrarMensaje = document.querySelector(".input-text-area");
 const mensajeVacio = document.querySelector(".mensaje-vacio");

 botonParaCopiar.style.display = "none";
 botonParaDesencriptar.style.background="transparent";
 botonParaDesencriptar.style.color = "#0A3871";
 mostrarMensaje.style.display="none";

 function botonEncriptar() {
   const textoEncriptado = encriptar(inputTexto.value);
   mostrarMensaje.value = textoEncriptado;
   mensajeVacio.style.display = "none";
   mostrarMensaje.style.height="300px";
   botonParaCopiar.style.display = "block";
   botonParaCopiar.style.background = "#0A3871";
   botonParaCopiar.style.color = "#fff";
   mostrarMensaje.style.display="block";
   botonParaDesencriptar.style.background="transparent";
   botonParaDesencriptar.style.color="#0A3871";
   botonParaEncriptar.style.background="transparent";
   botonParaEncriptar.style.color="#0A3871";
   botonParaCopiar.focus();

 }
 function encriptar(textoAEncriptar) {

   let matrizLetras = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];

   textoAEncriptar = textoAEncriptar.toLowerCase();
   for (let i = 0; i < matrizLetras.length; i++) {
     if (textoAEncriptar.includes(matrizLetras[i][0])) {
       textoAEncriptar = textoAEncriptar.replaceAll(matrizLetras[i][0], matrizLetras[i][1])
     }
   }
   return textoAEncriptar;
 }

 const textoParaCopiar = document.querySelector(".input-text-area");
 // Copiar
 function botonCopiar() {
   inputTexto.value = textoParaCopiar.value;
   mostrarMensaje.value = "";
   botonParaDesencriptar.style.background="#0A3871";
   botonParaDesencriptar.style.color="#fff";
   botonParaEncriptar.style.background="transparent";
   botonParaEncriptar.style.color="#0A3871";
   botonParaCopiar.style.background = "transparent";
   botonParaCopiar.style.color = "#0A3871";
   botonParaDesencriptar.focus();
 }

 //Desencriptar
 const textoADesencriptar = document.querySelector(".input-text");
 function botonDesencriptar() {
   const textoDesencriptado = desencriptar(textoADesencriptar.value);
   mostrarMensaje.value = textoDesencriptado;
   botonParaDesencriptar.style.background="transparent";
 botonParaDesencriptar.style.color = "#0A3871";
   botonParaEncriptar.style.background="#0A3871";
   botonParaEncriptar.style.color="#fff";
   botonParaCopiar.style.background = "transparent";
   botonParaCopiar.style.color = "#0A3871";
   
   textoADesencriptar.focus();
 }

 function desencriptar(textoParaDesencriptar) {
   let matrizLetrasD = [["ai", "a"], ["enter", "e"], ["imes", "i"], ["ober", "o"], ["ufat", "u"]];
   for (let i = 0; i < matrizLetrasD.length; i++) {

     if (textoParaDesencriptar.includes(matrizLetrasD[i][0])) {
       textoParaDesencriptar = textoParaDesencriptar.replaceAll(matrizLetrasD[i][0], matrizLetrasD[i][1]);
     }
     if (textoParaDesencriptar.includes("ames")) {
       textoParaDesencriptar = textoParaDesencriptar.replaceAll("ames", "a");
     }

   }
   return textoParaDesencriptar;

 }

