function cambiarEstilos(){
    var arrParrafos = document.getElementsByTagName("p");

    for(let i=0;i<arrParrafos.length;i++){
        console.log((i+1)%2);

        //COMPROBAMOS SI ES PAR Y AÑADIMOS LA CLASE CORRESPONDIENTE, SI NO, AÑADIMOS LA CLASE IMPAR
        if(esPar(i)){
            arrParrafos[i].classList.add("par");
        } else {
            arrParrafos[i].classList.add("impar");
        }

    }
}

//FUNCION QUE DEVUELVE TRUE O FALSE EN FUNCION DE SI ES PAR O NO, EN MI CASO HE TOMADO EL PRIMER PARRAFO COMO POSICION 1 
function esPar(numero){
    let booleanPar = false;
    if((numero+1)%2==0){
        booleanPar = true;
    } 
    return booleanPar;
}