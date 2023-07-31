promesa();
function promesa() {

    fetch(`./pokemones.json`).then((value) => {
    
        return value.json();

    }).then((valueJson)=>{
    
        
    for (let index = 0; index <10; index++) {
    
        crearImagen(valueJson[index].ThumbnailImage, valueJson[index].name,valueJson[index].id);   
    }
    }).catch((err)=>{
        document.write("Ocurrio un error.:(");
        
    });
  
}
   

function crearImagen (params,nombre,id) {
   
    let img = document.getElementById(`card-img-top${id}`);
    img.setAttribute("src",params) 
    let poder =document.getElementById(`card-title${id}`)
    poder.innerHTML =nombre;  
}


function mostrarMensaje(id) {
    console.log(id);


    fetch(`./pokemones.json`).then((value) => {
    
        return value.json();

    }).then((valueJson)=>{
 
        crearImagen(valueJson[id].ThumbnailImage, valueJson[id].name,valueJson[id].id);   
        let poder =document.getElementById(`poderes${id}`)
        poder.innerHTML= `Poder: ${valueJson[id].abilities}` ;
        let peso =document.getElementById(`peso${id}`)
        peso.innerHTML= `Peso: ${valueJson[id].weight}` ;
        let debilidades =document.getElementById(`debilidades${id}`)
        debilidades.innerHTML= `Debilidades: ${valueJson[id].weakness}` ;

    }).catch((err)=>{
        document.write("Ocurrio un error.:(");
        
    });


    
}




