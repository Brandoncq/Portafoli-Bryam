import {} from "./components/Inicio.js"
import {} from "./components/Soy.js"
import {} from "./components/Proyectos.js"
import {} from "./components/Contacto.js"
import {} from "./components/Videos.js"

const main = document.querySelector("main")
const contenedor = document.querySelectorAll('.container-overlay')
const reDim_1= document.querySelectorAll('.overlay-top-left')
const reDim_2= document.querySelectorAll('.overlay-bottom-right')

function aplicarMediaQuery() {
    
    if (window.innerWidth >= 768) { // Cambia el ancho según tu necesidad
        console.log("hello-computer")
        //miDiv.classList.add("elemento-grande");
        contenedor.forEach(element => {
            if(element.classList.contains("indice")){
                element.classList.toggle("indice")
                element.classList.toggle("container-overlay")
            }
            
        });
        reDim_1.forEach(element => {
            if(element.classList.contains("col")){
                element.classList.toggle("overlay-top-left")
                element.classList.toggle("col")
            } 
            
        });
        reDim_2.forEach(element => {
            if(element.classList.contains("col")){
                element.classList.toggle("overlay-bottom-right")
                element.classList.toggle("col")
            }
        });
    } else {
        console.log("hello-movil")
        contenedor.forEach(element => {
            
             if(element.classList.contains("container-overlay")){
                element.classList.toggle("indice")
                element.classList.toggle("container-overlay")
            }
        });

        reDim_1.forEach(element => {
            if(element.classList.contains("overlay-top-left")){
                element.classList.toggle("overlay-top-left")
                element.classList.toggle("col")
            }     
        });
        reDim_2.forEach(element => {

            if(element.classList.contains("overlay-bottom-right")){
                element.classList.toggle("overlay-bottom-right")
                element.classList.toggle("col")
            } 
            
        });
    }
}
  
  // Llama a la función al cargar la página y cuando la ventana cambie de tamaño
  aplicarMediaQuery();
  window.addEventListener("resize", aplicarMediaQuery);

//Medidas
const overlayTopLeftElements = document.querySelectorAll('.overlay-top-left');
const overlayBottomRightElements = document.querySelectorAll('.overlay-bottom-right');

overlayTopLeftElements.forEach(element => {
    const base = element.offsetWidth;
    console.log('Base del overlay-top-left:', base, 'px');
});

overlayBottomRightElements.forEach(element => {
    const alto = element.offsetHeight;
    console.log('Alto del overlay-bottom-right:', alto, 'px');
});

