import {} from "./components/Inicio.js"
import {} from "./components/Somos.js"
import {} from "./components/Proyectos.js"
import {} from "./components/Contacto.js"
import {Navegacion_inicio} from "./components/Inicio.js"
import {Navegacion_contacto} from "./components/Contacto.js"
import {Navegacion_somos} from "./components/Somos.js"
import {Navegacion_proyectos} from "./components/Proyectos.js"
import {arquidata} from './components/datos-arqui.js'
import {diseniodata} from './components/datos-disenio.js'
import {renderdata} from './components/datos-render.js'
import {showProjectDetails} from "./components/Proyectos.js"
//import {projectDetails} from "./components/Proyectos.js"

const projectDetails = document.createElement('div')
projectDetails.setAttribute('id','projectDetails')
projectDetails.classList.add('container')
projectDetails.classList.add('p-4')

const main=document.querySelector("main")
window.addEventListener("click", e=>{
    console.log(e.target)
})

/*const logo= document.querySelector('.logo')
function aplicarMediaQuery() {
    if (window.innerWidth >= 768) { 
        if(logo.classList.contains("acomodar")){
            logo.classList.remove('acomodar')
        }
    } else {
        if(logo.classList.contains("acomodar")==false){
            logo.classList.add('acomodar')
        }
    }
}
  
  aplicarMediaQuery();
  window.addEventListener("resize", aplicarMediaQuery);*/

  window.addEventListener("load", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const defaultSection = urlParams.get("section");
  
    // Si no hay ninguna sección en la URL, establece la sección "inicio" por defecto
    if (!defaultSection) {
        window.history.replaceState({ section: "inicio" }, "", "?section=inicio");
        loadCurrentSection();
    }else{
        loadCurrentSection();
    }
});
//Medidas
document.addEventListener("click", function(event) {
    const target = event.target;

    if (target.classList.contains("nav-link")) {
        event.preventDefault(); // Evita la navegación predeterminada
        const sectionId = target.id;
        const newURL = "?section=" + sectionId;
        window.history.pushState({ section: sectionId }, "", newURL);
        loadSection(sectionId);

        // Cambia la URL para reflejar la nueva sección en el historial
        
    } else if (target.classList.contains("proyecto")) {
        event.preventDefault();
        const sectionId = "proyectos";
        const newURL = "?section=" + sectionId;
        window.history.pushState({ section: sectionId }, "", newURL); // Evita la navegación predeterminada
        loadSection(sectionId);

        // Cambia la URL para reflejar la nueva sección en el historial
        
    }
});



// Manejador de eventos para el botón de retroceso
window.addEventListener("popstate", function(event) {
    if (event.state && event.state.section) {
        
        if (event.state.section == "proyectos") {

            if(event.state.nombre){
                const projectName = event.state.nombre;
                let project = null;
                
                // Buscar el proyecto en cada arreglo de datos
                project = arquidata.find(project => project.titulo === projectName);
                if (!project) {
                    project = diseniodata.find(project => project.titulo === projectName);
                }
                if (!project) {
                    project = renderdata.find(project => project.titulo === projectName);
                }
                if (project) {
                    main.innerHTML = "";
                    main.appendChild(projectDetails);
                    showProjectDetails(project,projectDetails);
                }
            }else{
                loadSection(event.state.section);
            }
        } else {
            loadSection(event.state.section);
        }
    } else {
        loadCurrentSection();
    }
});

// Función para cargar la sección actual basada en la URL
function loadCurrentSection() {
    const currentURL = window.location.href;
    const sectionId = obtenerIdDeURL(currentURL);
    if (sectionId) {
        loadSection(sectionId);
    }
}

function obtenerIdDeURL(currentURL){
    const urlParams = new URLSearchParams(window.location.search);// Obtener los parámetros de la URL
    const sectionId = urlParams.get('section'); // Obtener el valor del parámetro 'section'
    return sectionId;
}
function obtenerNombreDeURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectName = urlParams.get("nombre");
    if (projectName) {
        return decodeURIComponent(projectName); // Decodifica el valor del parámetro
    }
}
// Función para cargar y mostrar el contenido de la sección correspondiente al sectionId
function loadSection(sectionId) {
    switch (sectionId) {
        case "inicio":
            Navegacion_inicio();
            break;
        case "somos":
            Navegacion_somos();
            break;
        case "proyectos":
            const projectName = obtenerNombreDeURL();
            if(projectName){
                let project = null;
                project = arquidata.find(project => project.titulo === projectName);
                if (!project) {
                    project = diseniodata.find(project => project.titulo === projectName);
                }
                if (!project) {
                    project = renderdata.find(project => project.titulo === projectName);
                }
                if (project) {
                    main.innerHTML = "";
                    main.appendChild(projectDetails);
                    showProjectDetails(project,projectDetails);
                }
            }
                
            else{
                Navegacion_proyectos();
            }
            
            //cargarContenidoProyectos();
            break;
        case "contacto":
            Navegacion_contacto();
            break;
        default:
    }
}