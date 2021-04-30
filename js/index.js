
//nombro las constantes de mis casillas y mi boton
const nombreuser = document.getElementById('nombre');
const fraseuser = document.getElementById('frase');
const accionbotonpublicar = document.getElementById('botonpublicar');

//El Div al que le voy a agregar los datos para la publicacion
const contenedordatosuser = document.getElementById('profile');

//Construyo mi metodo sibiraperfil para que luego sea la accion del boton
const subiraperfil = ()=>{

let elnombre = nombreuser.value;
let elcontenidodelpost = fraseuser.value;
let subirabase = database.ref('ramadatos').push();

let laserializacion = {

nombres: elnombre,
frases: elcontenidodelpost,
llaves: subirabase.key,
}

nombreuser.value = "";
fraseuser.value = "";
subirabase.set(laserializacion);
}

database.ref('ramadatos').on('value',function(data){

contenedordatosuser.innerHTML = '';

data.forEach(element => {

    let cadapublicacion = element.val();
    let objeto = new muro(cadapublicacion.nombres, cadapublicacion.frases, cadapublicacion.llaves);
    contenedordatosuser.appendChild(objeto.pintar());
    
});

});




accionbotonpublicar.addEventListener('click',subiraperfil);