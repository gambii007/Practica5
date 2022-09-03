//querySelector
const heading = document.querySelector('.header__texto h2');
heading.textContent = 'Prueba'
console.log(heading);

//querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo texto para enlace';
enlaces[0].classList.add('Nueva-clase');
enlaces[0].classList.remove('navegacion__enlace');

//getElementById
const heading2 = document.getElementById('heading');
console.log(heading2);

//Generar un nuevo enlace
const nuevoEnlace = document.createElement('A');
//Agregar el href
nuevoEnlace.href = '#';
//Agregar el Texto
nuevoEnlace.textContent = 'TiendaVirtual'
//Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');
//Agregarlo al Documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);


//====Eventos=======//
console.log(1);

window.addEventListener('load', imprimir) //load espera que el JS y los archivos que dependen del HTML esten listos

window.onload = function () {
    console.log(3);    
}

document.addEventListener('DOMContentLoaded', function () { //Solo espera que se descargue el HTML, pero no espera el CSS o imagenes
    console.log(4);
})

console.log(5);

function imprimir() {
    console.log(2);
}

window.onscroll = () => console.log('Scrolling...'); //Arrow funtion


//Selector de elementos y asociarles un evento
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function (evento) {
//     console.log(evento);
//     evento.preventDefault(); //codigo importante para formulario, previene que se envie los datos, para verificarlos antes de enviarlos
//     console.log('Enviado Formulario click');
// });

//Eventos de los imputs y textarea
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

//Evento Submit
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    //Validar Formulario

    const { nombre, email, mensaje } = datos;

    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', 'error');
        return; //Corta la ejecucion del codigo
    }

    //Enviar Formulario
    mostrarAlerta('Mensaje Enviado');
});

//funciones
function leerTexto(evento) {
    //console.log(evento.target.value);
    datos[evento.target.id] = evento.target.value;

    console.log(datos);
};

//============Refactoring========//

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if (error) {
        alerta.classList.add('error');
    }else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    }, 2100);
}

//Aplicando refactoring a todo lo de abajo

// function mostrarError(mensaje) {
//     const error = document.createElement('P');
//     error.textContent = mensaje;
//     error.classList.add('error');
//     formulario.appendChild(error);
//     console.log(error);

//     //Disappear after of three seconds
//     eliminarAlertas(error);
// }

// function mostrarEnvio(mensaje) {
//     const envio = document.createElement('P');
//     envio.textContent = mensaje;
//     envio.classList.add('correcto');
//     formulario.appendChild(envio);

//     //Disappear after of three seconds
//     eliminarAlertas(envio);
// }

// function eliminarAlertas(elemento) {
//     setTimeout(() => {
//         elemento.remove();
//     }, 2100);
// }