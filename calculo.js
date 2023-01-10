function numeros (valor){


    document.getElementById("resultado").value += valor;
}

function operacion(){
    var operar = document.getElementById("resultado").value;
    if(operar == 0){
        document.getElementById("resultado").value = "Sin Operacion;"
    } else{
        document.getElementById("resultado").value= eval (operar);
    }
}


function reset(){
    document.getElementById("resultado").value = " ";
}