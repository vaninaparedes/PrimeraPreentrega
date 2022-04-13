function saludar(nombre){
    alert("¡Bienvenido " + nombre +" al carrito de compras de servicio de belleza!");
}
let persona = prompt("Escribe tu nombre")
saludar(persona);

const Manicuria = ("cuesta $2000")
const Pedicuria = ("cuesta $2500")
const Ambas = ("cuesta $4000")
const servicio = parseInt(prompt("Escriba el servicio que desee realizarse: \n Manicuria \n Pedicuria \n Manicuria+Pedicuria \n Pestañas "));


if (servicio == Manicuria) {
    resultado = Manicuria;
    alert("El servicio de manicuria"+ resultado);
  } else if (servicio == Pedicuria) {
    resultado = Pedicuria;
    alert("El servicio de pedicuria"+ resultado);
  } else if (servicio == Ambas) {
    resultado = Ambas;
    alert("El combo de manicuria y pedicuria"+resultado);
  }
  
//Combos de servicios que se pueden realizar

function Servicios (manicuria , pedicuria, pestañas){  
this.manicuria = manicuria;
this.pedicuria = pedicuria;
this.pestañas = pestañas;
}; 

const combo1 = new Servicios ('Belleza de manos con esmalte', 'Belleza de pies con esmalte', 'Permanente de pestañas'); 
console.log (combo1);

const combo2 = new Servicios ('Belleza de manos con esmaltado semipermanente',  'Belleza de pies con esmaltado semipermanente', 'Extension de pestañas naturales'); 
console.log (combo2);

const combo3 = new Servicios ('Esmaltado semipermanente con nailart', 'Belleza de pies con esmaltado semipermanente', 'Extensión de pestañas tamaño medio'); 
console.log (combo3);

const combo4 = new combo ('Uñas esculpidas con esmaltado semipermanente', 'Belleza de pies con esmaltado semipermanente', 'Extension de pestañas a eleccion'); 


var manos = ["Belleza de manos", "Esmaltado comun","Esmaltado semipermanente","Esmaltado con nailart","Uñas esculpidas"];

var pies = ["Belleza de pies", "Esmaltado comun","Esmaltado semipermanente","Esmaltado con nailart"];

var  pestañas  = ["Lifting de pestañas", "Extension de pestañas","Remocion de extension de pestañas"];






