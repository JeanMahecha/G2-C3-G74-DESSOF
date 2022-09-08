alert("mensaje dentro del js");
var nombre="Jean";
alert("el nombre es " + nombre);
/*var numero1=prompt("Ingrese numero 1");
var numero2=prompt("Ingrese numero 2");
var numero3=5;
var suma = parseInt(numero1)+parseInt(numero2);
alert("la suma de los numeros es " + suma);*/

document.write("<h3>Prueba de js en hmtl</h3>");
var arreglo_prueba=["Quimica", true, 45,23,"juan"];

for(i=0 ; i < arreglo_prueba.length;i++){
    document.write(arreglo_prueba[i] + "</br>");
}
document.write(arreglo_prueba.join("-"));