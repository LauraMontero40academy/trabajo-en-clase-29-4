//1. Dashboard Nike (No se vale marca Nike)
console.log('Ya casi está hecha :D');
//-------------------------------------------------------------------------------------------------------------

//2. una funcion que calcule el logaritmo natural de un numero
function getBaseLog(x,y) {
    return Math.log(y) / Math.log(x);
  }
  
 console.log(getBaseLog(4, 64));

 console.log(getBaseLog(2, 32));
//-------------------------------------------------------------------------------------------------------------

//3. busqueda simple si el texto incluye playa
var text = "mañana vamos a comer un churchill al puerto, y luego vamos a la playa";

function detectar_contenido (texto){
    if (texto.includes('playa')){ 
        console.log('Genial, vas para la playa');
    }else{
        console.log('No vas para la playa');
    }
}
detectar_contenido(text)