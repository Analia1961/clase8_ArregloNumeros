// Arreglos (Ejercicios ONLINE) Viernes 13 de mayo de 2022
// Ejercicio 2 - Arreglo de Números

/* 
• Construya un algoritmo que tenga un arreglo de números 
y se los muestre al usuario
• El arreglo debe ser llamado num
• El arreglo num debe contener los siguientes datos: 
20, 14, 8, 0, 5, 19 y 24.
• Mostrar los valores resultantes del arreglo
*/

let num: number[] = new Array(7);

num[0] = 20;
num[1] = 14;
num[2] = 8;
num[3] = 0;
num[4] = 5;
num[5] = 19;
num[6] = 24;

let indice: number = 0;
while (indice < 7) {
  console.log("El número en la posición", indice + " es " + num[indice]);
  indice++;
}

// DOS FORMAS DISTINTAS DE HACER LO MISMO
/* for (let i: number = 0; 1<7; i++) {
  console.log("El número en la posición ", indice + " es " + num[indice]);
}
*/
