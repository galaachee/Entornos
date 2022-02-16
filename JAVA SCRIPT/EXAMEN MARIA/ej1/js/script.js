function mostrarNumeros(){
    //DECLARAMOS VARIABLES
    var arrNumeros=new Array(4,1,8,12,9,2,5,10,6,10);
    var cabecera=document.createElement("h1");
    var nodoTexto=null;

    //RECORREMOS EL ARRAY ENTERO, SUMAMOS 5 A CADA NUMERO 
    for(let numero of arrNumeros){
        numero=numero+5;
        //CREAMOS EL TEXTO DE LA CABECERA CON CADA NUMERO Y LO INSERTAMOS
        nodoTexto=document.createTextNode(numero+" ");
        cabecera.appendChild(nodoTexto);
    }

    //LO INSERTAMOS EN EL CUERPO DEL DOCUMENTO
    document.body.appendChild(cabecera);
}