// BUCLES
/*
for (var contador=1; contador<=10; contador++){
    console.log(contador);
}

var contador = 1;
while (contador<=10){
    console.log(contador);
    contador++;
}
*/

// FUNCIONES
/*
function sumer(valor1, valor2){
    return valor1 + valor2;
}

var total = sumer(10,20);
console.log(total);
*/

// PRACTICA 1
/*
var vector = [22, 25, 60, 98, 11, 78, 4, 33, 85, 10];

var mayor, posicionMayor;
var menor, posicionMenor;

mayor = vector[0];
posicionMayor = 0;

menor = vector[0];
posicionMenor = 0;

for (let i = 0; i < 10; i++){
    if (mayor < vector[i]){
        mayor = vector[i];
        posicionMayor = i;
    }
    if (menor > vector[i]){
        menor = vector[i];
        posicionMenor = i;
    }
}

console.log("Mayor es " + mayor + " y esta en " + posicionMayor);
console.log("Menor es " + menor + " y esta en " + posicionMenor);
*/

// TP

var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
var diasDelMes = ['31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31'];

console.log('Meses con 30 días:');
for (let i = 0; i < diasDelMes.length; i++) {
    if (diasDelMes[i] == 30) {
        console.log(meses[i]);
    }
}

console.log('Meses con 31 días:')
for (let i = 0; i < diasDelMes.length; i++) {
    if (diasDelMes[i] == 31) {
        console.log(meses[i]);
    }
}