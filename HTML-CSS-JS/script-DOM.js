// DOM: Modelado que permite acceder a elementos del HTML
// El navegador interpreta el documento HTML en una jerarquia de nodos (en forma de árbol)

// Obtiene elemento Id. El doc html lee el codigo JS y lo ejecuta directamente. 
document.getElementById("id_prueba").innerHTML = "Inyectando texto desde script";
document.getElementById("id_prueba").style.color = "blue";

// Ejemplo 1: dar funcionalidad a la página mediante una función en JS utilizando el DOM. 
function manejoDeClick(){
    document.getElementById("id_prueba2").innerHTML = "Segunda prueba inyectando texto desde script";
    document.getElementById("id_prueba2").style.color = "brown";
}

