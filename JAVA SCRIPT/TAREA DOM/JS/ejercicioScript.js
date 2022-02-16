function insertarImagenes()
{
    var listaDivs = null;
    var pregunta = "";
    var contador = 0;

    listaDivs = document.getElementsByClassName("imagenInterna");

    pregunta = prompt("Desea introducir mas imagenes?");

    while ((pregunta.localeCompare("si")==0) && (contador<listaDivs.length))
    {
        imagen = prompt("Escriba la url de la foto");

        listaDivs[contador].innerHTML= '<img src="' + imagen + '">';

        pregunta = prompt("Desea introducir mas imagenes?");

        contador ++;
    }
}