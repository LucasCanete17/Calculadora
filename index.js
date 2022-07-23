const displayValorAnterior = document.getElementById('valor-Anterior');
const displayValorActual = document.getElementById('valor-Actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperacion = document.querySelectorAll('.operacion');
let nombreUsuario = localStorage.getItem('nombreUsuario');
let apellidoUsuario = localStorage.getItem('apellidoUsuario');
let edadUsuario = localStorage.getItem('edadUsuario');

// Variables Dom
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const edad = document.getElementById('edad');
const respuestaNombre = document.getElementById('respuesta-nombre');
const respuestaApellido = document.getElementById('respuesta-apellido');
const respuestaFormulario = document.querySelector('#respuesta-formulario');
const respuestaEdad = document.getElementById('respuesta-edad');
const contenidoFormulario = document.getElementById('contenidoFormulario');
const contenido = document.getElementById('contenido')


//funciones
const ocultarFormulario = () => {
    contenidoFormulario.style.display ='none';
    contenido.innerHTML = `Hola ${nombreUsuario} ${apellidoUsuario}, tienes ${edadUsuario} años`;
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    nombreUsuario = nombre.value;
    apellidoUsuario = apellido.value;
    edadUsuario = edad.value;

    localStorage.setItem('nombreUsuario', nombre.value);
    localStorage.setItem('apellidoUsuario', apellido.value);
    localStorage.setItem('edadUsuario', edad.value);
    
    ocultarFormulario();
})





const display = new Display(displayValorAnterior, displayValorActual);


botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => 
        display.agregarNumero(boton.innerHTML))
})

botonesOperacion.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
})


// librerias            
const botonUno = document.getElementById('botonUno')    


botonUno.addEventListener('click', () =>{
    Swal.fire({
        icon: 'success',
        title: `Hola ${nombre.value}`,
        text: 'Vamos a Calcular!!!',
        
      })
      
})

botonUno.addEventListener('click',()=>{
    document.getElementById('calculadora').style.display = 'block'
    })