/*Funciones solicitadas:
obs: los días se deben ingresar como tipo String y los valores de los productos a
comprar se deben trabajar con arreglos, por ejemplo = [1000,500,650,8000]
● Don José todos los martes y jueves realiza un 20% de descuento en el total de las
compras, crea una función la cual debe recibir un parámetro del día y el arreglo de
valores de los productos a comprar, esta debe retornar el total final de la compra según
corresponda o no descuento.*/


//crear matriz para generar descuento en caso de que sea mas de 10mil pesos y variables asignada para martes o jueves//
let x = ("martes")
let y = ("jueves")
var mayoradiezmil = [];
//crear funcion, crear matriz para el precio final y otra que se rellene con el descuento para mostrar el precio final//
function descuento (preciofinal){
var preciototal = [];
var preciocondescuento = [];
// leer el día y el precio para luego generar los datos solicitados si es que coinciden//
console.log ("ingrese día de compra")
dia = (string)
scanf (dia);
console.log ("ingrese monto para aplicar descuento")
scanf [preciototal]
if (dia=x|y) {
    preciototal.forEach(x=>preciocondescuento.push(x*0.8));
}
}
console.log("el precio final es" .preciocondescuento)



/* Don José hace un 5% de descuento a los clientes que compran más de 3 productos y al
menos uno de ellos tiene un valor mayor a 10.000, realiza una función que calcule el
total verificando si corresponde o no el descuento.*/

//Crear variable para cantidad de productos, crear variable para precio mayor a 10mil, precio sin descuento y preciofinal//
var cantprod = [];
var mayoradiezmil = [];
var precio = [];
var preciofinal = [];
function descuento (x)
//escanear cantidad de productos y precio para aplicar descuento//
console.log ("ingrese productos comprados")
scanf [cantprod]
console.log ("hay algún producto que valga mas de 10.000? (ingrese si o no)")
scanf [mayoradiezmil]
if (cantprod>3 && precio=="si"){

precio.forEach(x=>preciofinal.push(x*0.95));
} 
return preciofinal



/*● Se desea tener una función verificadora encargada de revisar si dentro de el arreglo de
valores de los productos a comprar no existan valores negativos ingresados por error,
en caso de no existir debe retornar un mensaje de éxito, en caso contrario debe retornar
un mensaje de error junto con el número negativo y el índice en el que se encontraba.*/
//declarar variable para el arreglo
var arreglo = [];
for (var i = 0; i < array.length; i++) { // recorrer el array
    if (arreglo < array[i]) { 
        console.log("error en el indice" [i]);
        else console.log("todo esta correcto");
        
    }}
    


    /*● Dado el siguiente arreglo  con los valores de cada
    producto
    ○ Crea una función que retorne el valor del producto más costoso.
    ○ Crea una función que retorne el valor del producto menos costoso.*/

//funcion que recorra el array y escanee cada indice y muestre el precio mas caro
    function numeroMasCostoso(array) { 
        let costoso = array[200,5500,900,7000,500,300]; 
        for (var i = 0; i < array.length; i++) { 
            if (costoso < array[i]) { 
                costoso = array[i]; 
            }
        }
        console.log('El precio mas costoso es: ' + costoso); 
        return costoso;
    }