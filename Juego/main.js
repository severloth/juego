
function cambiarColorVerde(elem){
    elem.style.backgroundColor = 'green';

    

}

function cambiarColorRojo(elem){
    elem.style.backgroundColor = 'red';

   
    
}

function cambiarPregunta(){
    const respuesta1 = document.getElementById('rta1');

    const respuesta2 = document.getElementById('rta2');

    const respuesta3 = document.getElementById('rta3');

    respuesta1.textContent = 'O';
    respuesta2.textContent = 'S';
    respuesta3.textContent = 'U';

    respuesta1.parentNode.style.backgroundColor = 'black';
    
    respuesta2.parentNode.style.backgroundColor = 'black';
    respuesta3.parentNode.style.backgroundColor = 'black';
}


function controlar(elem){
    console.log(elem);
    const caja1 = document.getElementById('respuestaUno')
    const caja2 = document.getElementById('respuestaDos')
    const caja3 = document.getElementById('respuestaTres')


    if (elem.textContent == '1950') {
        
        cambiarColorVerde(elem.parentNode);

        sumarAcierto();
        
        setTimeout(cambiarPregunta,3000);
 
    }

    else{
        cambiarColorRojo(elem.parentNode);

        setTimeout(cambiarPregunta, 3000);

       
    }
}


function sumarAcierto(){
    const aciertos = document.getElementById('aciertosNum');
    aciertos.textContent++;
}

