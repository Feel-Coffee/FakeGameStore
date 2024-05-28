//Se encarga de confirmar tu edad y te obligara a ingresar tu edad o no te dejara entrar. No encontre como hacer para que funcione solo una vez, y tambien busque con ia pero nada ;-;
window.onload = function() {
    var userAge = prompt("Por favor ingrese su edad:");
    while (userAge === "" || userAge === null) {
        alert("Debe ingresar su edad.");
        userAge = prompt("Por favor ingrese su edad:");
    }
    if (userAge >= 18) {
        alert("Bienvenido a LITTLE COFFEE GAMESTORE!");
    } else {
        alert("Eres menor de 18. Estas bajo tu propia responsabilidad");
    }
};