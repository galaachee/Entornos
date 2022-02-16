function insertarImagenes()
{
    const NUM_COLUMNAS = 2;
    var arrayJuegos = null;
    var arrayCatalogos = null;
    var tabla = null;
    var fila = null;
    var celda = null;


    arrayJuegos = document.getElementById("nombreJuegos").getElementsByTagName("li");
    arrayCatalogos = document.getElementById("catalogacionJuegos").getElementsByTagName("li");

    divDerecha = document.getElementById("derecha");

    divDerecha.innerHTML = "<table id='tablaJuegos' border='1'> </table>";

    tabla = document.getElementById("tablaJuegos");

    for(i=0; i<arrayJuegos.length; i++)
    {
        if (arrayCatalogos[i].textContent[0].localeCompare("V")!= 0)
        {
            fila = tabla.insertRow(-1);
            celda = fila.insertCell(-1);
            fila.innerHTML = "<td>" + arrayJuegos[i].textContent + "</td> <td>" +arrayCatalogos[i].textContent +  "</td>";
        }
    }


}
