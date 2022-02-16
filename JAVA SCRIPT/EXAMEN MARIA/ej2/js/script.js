function insertarElemento(){
    //DECLARAMOS VARIABLES
    var nodoTexto = null;
    var elementoLista = null;
    //RECOGEMOS VALUE DE LA CAJA DE TEXTO
    var inputCiudad=document.getElementById("cajaTexto").value;
    //OBTENEMOS LA LISTA UL PARA INSERTAR LA CIUDAD EN EL HTML
    var listaUl=document.getElementById("lista");

    //CREAMOS NUEVO ELEMENTO LI Y NODO TEXTO PARA INSERTARLO EN LA LISTA HTML
    elementoLista = document.createElement("li")
    nodoTexto = document.createTextNode(inputCiudad);
    elementoLista.appendChild(nodoTexto)
    listaUl.appendChild(elementoLista);
}