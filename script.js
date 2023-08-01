promesa("a");


function promesa(x) {

    fetch(`./pokemones.json`).then((value) => {
    
        return value.json();

    }).then((valueJson)=>{
        

        if (x=="a") {
            for (let index = 0; index <10; index++) {
            crearImagen(valueJson[index].ThumbnailImage, valueJson[index].name,valueJson[index].id); 
            }
            
        }
        else{
            let contador=1;
            for (let index = 0; index <10; index++) {
                console.log(`INGRESADO ${x}`)
                console.log(valueJson[index].name)
                
                if (x == valueJson[index].name) {
                    console.log("Entre")
                    crearImagen(valueJson[index].ThumbnailImage, valueJson[index].name,contador); 
                    contador = contador +1 ;

                } else {
                    
                    let result = document.getElementById("resultado");
                    result.innerHTML=("Pokemon No encontrado");
                    
                    
                    
                }
                
                }
           
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
function buscar () {

    let formulario = new FormData(form);
    let producto = formulario.get("producto");
    borrar();
    promesa(producto);
  

}
const form = document.getElementById("formulario")
form.addEventListener("submit",function(event){
    event.preventDefault();

})

function borrar() {

    for (let index = 0; index <10; index++) {
        let img = document.getElementById(`card-img-top${index+1}`);
        img.setAttribute("src","") 

        let poder =document.getElementById(`card-title${index+1}`)
        poder.innerHTML =""; 
        let boton =document.getElementsByClassName("boton")
        boton.innerHTML =""; 

        }
       
}


