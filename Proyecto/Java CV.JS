

document.addEventListener("click", function () {

    console.log("Cantidad de clicks en pagina");
    document.getElementById("boton").innerHTML = "Enviado";
  }

)
  

document.getElementById("boton").onclick =  function () {
    document.getElementById("ocultar").style.display= "block";
}
