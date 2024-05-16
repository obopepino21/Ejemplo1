
function Dividir(){
var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;

resp = num1/num2;
document.getElementById("resp").innerText = "El resultado de dividir " +num1+ "/" +num2+ " es: " +resp;
}

function Vocales(){
    var vocales = document.getElementById("vocales").value;
    var contador = 0;
    for (var i = 0; i < vocales.length; i++) {
        if (vocales[i] === 'a' || vocales[i] === 'e' || vocales[i] === 'i' || vocales[i] === 'o' || vocales[i] === 'u') {
            contador++;
        }
    }
    document.getElementById("resp2").innerText = "Las vocales que hay en el texto son: " +contador;
    
}

function Promedio(){
    var num1p = document.getElementById("num1p").value;
    if (num1p >= 30){
        document.getElementById("resp3").innerText = "Felicidades!! Usted esta Aprobado con un promedio de: " +num1p;
    }else{
        document.getElementById("resp3").innerText = "Nos vemos en segundad matricula crack: " +num1p;
    }
}