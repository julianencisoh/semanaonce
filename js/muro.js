class muro{

constructor(nombre,parrafo,llave){

this.nombre = nombre;
this.parrafo = parrafo;
this.llave = llave;

}

pintar = () => {

    let grupo = document.createElement('div'); 
    let grupodos = document.createElement('div'); 
    let union = document.createElement('div'); 
    
    let usuario = document.createElement('p');
    let pensamiento = document.createElement('p');
    
    let comentario = document.createElement('input');
    let enviar = document.createElement('button');

    let todoscomentarios = document.createElement('div');

    grupo.appendChild(usuario);
    grupo.appendChild(pensamiento); 
    
    usuario.innerHTML = this.nombre;
    pensamiento.innerHTML = this.parrafo;
    
    comentario.placeholder = "Escribe tu comentario";
    comentario.type = "text";
   
    enviar.id = "comentarlo";
    enviar.innerHTML= "Crear Comentario"; 
    
    grupodos.appendChild(comentario);
    grupodos.appendChild(enviar);
    

    
    union.appendChild (grupo);
    union.appendChild (todoscomentarios); 
    union.appendChild (grupodos);

    database.ref('ramadatos/'+this.llave+'/comentarios').on('value',function(data){
    
    data.forEach(
    comentario =>{
    
    let comentarios = comentario.val();
    let comments = document.createElement('div');
    let contenidocomment = document.createElement ('p');
    
    contenidocomment.innerHTML = comentarios.eltexto; 
    comments.appendChild(contenidocomment);
    todoscomentarios.appendChild(comments);
    
    })});
    
    
    enviar.addEventListener('click',() =>{
    
    let answer = comentario.value;
    let codigo = database.ref('ramadatos/'+this.llave+'/comentarios').push();
    let comentarios = {
    
        eltexto: answer,
        llave: codigo.key, 
    }
    
    comentario.value="";
    codigo.set(comentarios);

    });
    
    
    return union; 
    
    }



}