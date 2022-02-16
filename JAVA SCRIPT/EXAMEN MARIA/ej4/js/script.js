function calcularValores(){
    //DECLARAMOS VARIABLES
    var inputPeso=document.getElementById("cajaPeso").value;
    var inputAltura=document.getElementById("cajaAltura").value;
    var inputEdad=document.getElementById("cajaEdad").value;
    var nodoTexto = null
    var parrafo = null;

    //POR SI QUIERES VER LOS VALORES QUE DEVUELVEN LAS FUNCIONES, LOS HE MOSTRADO EN CONSOLA
    console.log(calcularIMC(inputAltura,inputPeso));
    console.log(calcularPesoIdeal(inputAltura, inputEdad));
   
    //SI EL IMC ES MAYOR A 25 INSERTAMOS UN PARRAFO
    if (calcularIMC(inputAltura,inputPeso)>25){
        parrafo = document.createElement("p");
        nodoTexto = document.createTextNode("Tu IMC es superior a 25.")
        parrafo.appendChild(nodoTexto);
        document.getElementById("central").appendChild(parrafo);
    } 
    //SI EL PESO ES SUPERIOR AL PESO IDEAL INSERTAMOS OTRO PARRAFO
    if (inputPeso>calcularPesoIdeal(inputAltura, inputEdad)){
        parrafo = document.createElement("p");
        nodoTexto = document.createTextNode("Tu peso es superior a tu peso ideal")
        parrafo.appendChild(nodoTexto);
        document.getElementById("central").appendChild(parrafo);
    } 
}

function calcularIMC(altura, peso){
    //PASAMOS LA ALTURA A METROS
    altura = altura/100;
    var totalIMC = peso/altura**2;

    return totalIMC;
}

function calcularPesoIdeal(altura, edad){
    var pesoIdeal = altura - 100 +((edad/10)*0.9);
    return pesoIdeal;
}
