// let numero1=10;
// let numero2=20;

// console.log(numero1+numero2);

// existen 2 formas de declarar string pero con la nueva especificacion de javasript ES2015 podemos crear template literales o template string la cual escapsulamos en comillas invertidad o backticks
// Como podéis ver, gracias a los template literals obtenemos un código mucho más fácil de leer y legible, ahorrándonos la concatenación de múltiples strings mediante el operador + .
// -podemos concatenar o interpolar string de modo que nuestro codigo quede mas limpio a diferencia de:
// console.log(nombre+ " "+apellido);
// console.log(`nombre ${nombre} apellido ${apellido}`)
// - otro beneficio de usar los backticks es que podemos usar los los enter osea string en varias lineas y poder tener un codigo mas limpio cosa que no podemos usarlo con los '' o ""
// para el salto de linea tenermos que usar el contraslash
//const html="<article>\
//<h1>Hola mundito</h1>\
//</article>"; 


// let nombre="jhonatan";
// let apellido='maquera';

// console.log(`mis datos son: ${nombre} ${apellido}`);
// console.log(nombre+ " "+apellido);
// console.log(numero2 + numero1)
// let isCasado=false;
// let isDivorsiado=true;

// console.log(isDivorsiado);

console.log("************** Array y  *********************");
// let numeros=[10,11,12,13,14]
// console.log(`cantidad de numeros ${numeros.length}`);

//acceder a un elemento atravez de su indice
// console.log(numeros[0]);

// para mostrar el ultimo elemento = cantidad de elementos -1
// console.log(`el ultimo elemento ${numeros.length-1}`);
//add un elemento al final del array
// numeros.push(1200)

// let nombres=['pamela','fiorella'];
// console.log(nombres);

//elimina el ultimo elemento del array
//nombres.pop()

//add Roxana al inicio del arreglo
nombres.unshift('Roxana')

//elimina el 1er elemento del arreglo recen como parametros la posicion de donde se quiere eliminar y la cantidad de elementos a eliminar
nombres.shift(posicion,1)

//encontrar el indice de un elemento por su nombre
nombres.indexOf('Roxana')

//eliminar un unico elemento mediante su posicion
//recibe como 1er parametro la posicion del arreglo 0-n y 2do parametro la cantidad de elementos a eliminar desde dicha posicion
// elimina y modifica el arreglo inicial que seria nombres
nombres.splice(1,1)

// metodo que se encaga de realizar una copia de los valores iniciales y si e padre es modificado o cambiado de valores despues de realizar la copia este copiaArray no se ve afectada
let copiaArray=nombre.sclice()

// para unir 2 array en 1 solo
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);
console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]



console.log("++++++++++++FUNCIONES++++++++++++++");
//funcion que no retorna nada ni recibe ningun argumento
// function imprimirFecha(){
//     let fecha=new Date();
//     console.log(fecha)
// }
//invocando ala funcion imprimir
// imprimirFecha();

//function que retorna un valor
// function retorna_fecha(){
//     let fecha=new Date();
//     return fecha;
// }

// console.log(retorna_fecha());

//funcion que recibe parametros y retorna su valor
//para documenta las funciones /* */
/**
 * funcion que recibe 2 numeros y calcula la suma
 * @param {number} a 1er numero
 * @param {number} b 2do numero
 * @return {number} el resultado de la suma
 */
// function suma(a,b){
//     return a+b;
// };

// let rpta=suma(10,0)
// console.log(rpta);

// ojo undefined= la variable esta creada pero no tienes un valor adentro
// typeof data == para saber que tipo de dato es la variable data

//funciones con parametros opcionales
// function suma(a=10,b=30){
//     console.log(a+b);
// }

// suma();
console.log("---------- funciones anonimas --------------");
// funciones anonimas fechas son funciones que no tienen nombre
// cuyo valor se guarda en una variable
// es nuevo standar usar las funciones anominas y no las otras ahora asi debemos crearlas por referencia
// lo mejor seria crearlo con const para que asi no se modifique su valor
// const sumando=function(){
//     return a+b;
// };
// let respuesta=sumando(7,8);
// console.log(respuesta);

// con el nuevo standar las funciones arrow function(funciones de flecha) k son funciones anonimas pero otra manera de escribir
//  ya no hay la palabra reservada function
// const sumarFecha=(a,b)=>{
// }
console.log("+++++++++ CALLBACK +++++++++++++++++");
// cuando usamos los callback como parametro le pasamos como referencia no como ejecucion de la funcion que seri con el ()
// const buscarPorDni=(x)=>{
//     // zona de ejecucion de mostrarResultado
//     x();
// }

// const mostrarResultado=()=>{
//     console.log('mostrando el resultado')
// }
// cuando usamos los callback como parametro le pasamos como referencia y cuando en otro funcion reciba ese callback entonces recien podemos usarlo como () para ejecutar esa function
// un callback es ejecutar un function dentro de otra funcion pasada como referencia
// buscarPorDni(mostrarResultado)
// aplicando otra manera es lo mismo solamente que no esta dentro de una variable si no asi nomas
// buscarPorDni(()=>{
//     console.log('mostrando el resultado');
// })

// tambien podemos hacerlo como funcion anonima osea no tiene nombre

// const buscarPorDni =(x,y)=>{

// }
//recibe 2 parametros este metodo x y y y cuando lo declaramos alli debemos colocarlo
// buscarPorDni(function(){
//     console.log('mostrando el resultadito')
// },175)

// la funcion se activa en 2 segundo
// setTimeout(() => {

// }, timeout);
// setTimeout(function(){

// },10)

console.log("+++++ function flecha o anonima simplificada ++++++");

// si la funcion solo tiene una 1 de codigo de ejecucion  entonces puedes omitir la llaves
// const sumar=(a,b)=> console.log('sumando...');

//si la function recibe 1 parametro podemos omitir las cosas
// const cuadrado = a => console.log(a*a);

//si la function retorna solo una linea de ejecucion podemos obviar el return  por los parentesis
// const cubo=n =(n*n*n);

console.log("++++++++++++ OBJETOS ++++++++++++");
//los arreglos se basan en sus posiciones y los objetos en sus nombre
// no se usa mucho el poo en js xk podemos crear objetos sin la necesidad de crear clases entonces x eso no se usa mucho
// por que bien sabes nostros que debemos crear una clases e instanciar para crear su objeto asi es normalmente

// como crear un objeto
let objPersona = {
  nombre: "jhonatan",
  apellido: "maquera",
  edad: 10,
  peso: 20.1,
  casado: true,
};

// forma de acceder a los objetos con el . podemos haceder a cualquier atributo del objeto
console.log(objPersona.nombre);
console.log(objPersona.apellido);
console.log(objPersona.edad);
console.log(objPersona.casado);

console.log(
  `mi nombre es ${objPersona.nombre} mi apelido ${objPersona.apellido} mi edad es ${objPersona.edad}`
);

// forma de 2 de acceder a los objetos con un string en los corchetes
// esta forma es la mejor para poder acceder a los formularios
console.log(objPersona.nombre["nombre"]);

// como modificar los valores del objetito

objPersona["nombre"] = "jhonael";
objPersona["apellido"] = "ramos";

console.log(objPersona);
// add un nuevo atributo
objPersona["comida"] = "picante";
objPersona.postresFavoritos = ["mazamorrita", "el flan", "keke"];

//ojo para la identacion usamos alf+shit+F y super vacan

let productos = [
  { nombre: "TV Samsung 50", precio: 100 },
  { nombre: "TV Samsung 40", precio: 50 },
  { nombre: "TV Samsung 30", precio: 25 },
];

//recorrer un array
for (let i = 0; i < productos.length; i++) {
    console.log(`Producto ${i}`);
    console.log(`nombre ${productos[i].nombre}`);
    console.log(`precio ${productos[i].precio}`);
    
}