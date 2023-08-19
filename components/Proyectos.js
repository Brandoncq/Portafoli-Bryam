import {arquidata} from './datos-arqui.js'
import {diseniodata} from './datos-disenio.js'
import {renderdata} from './datos-render.js'
import { target } from './Inicio.js';



const button = document.querySelector("#proyectos")
const main = document.querySelector("main")

const buttonarq = document.querySelectorAll("#proyectos-arquitectura")
const buttonrender = document.querySelectorAll("#proyectos-render")
const buttondisenio = document.querySelectorAll("#proyectos-disenio")


const gallery = document.createElement('div')
gallery.setAttribute('class','gallery')
gallery.classList.add('container')
gallery.classList.add('mt-5')

//TIPOS DE PROYECTOS
const arquitectura = document.createElement('div')
arquitectura.setAttribute('id','content-arquitectura')
arquitectura.classList.add('container')
arquitectura.classList.add('text-center')
arquitectura.style.paddingTop = '75px'
const h1arquitectura = document.createElement('h2')
h1arquitectura.classList.add('color-custom-blue')
const fila_arq = document.createElement('div')
fila_arq.setAttribute('class','row')
h1arquitectura.textContent = 'PROYECTOS ARQUITECTÓNICOS'
arquitectura.appendChild(h1arquitectura)
arquitectura.appendChild(fila_arq)
gallery.appendChild(arquitectura)


const renderizacion = document.createElement('div')
renderizacion.setAttribute('id','content-render')
renderizacion.classList.add('container')
renderizacion.classList.add('text-center')
renderizacion.style.paddingTop = '75px'
const h1renderizacion = document.createElement('h2')
h1renderizacion.classList.add('color-custom-blue')
const fila_render = document.createElement('div')
fila_render.setAttribute('class','row')
h1renderizacion.textContent = 'RENDERIZACIÓN'
renderizacion.appendChild(h1renderizacion)
renderizacion.appendChild(fila_render)
gallery.appendChild(renderizacion)


const disenio = document.createElement('div')
disenio.setAttribute('id','content-disenio')
disenio.classList.add('container')
disenio.classList.add('text-center')
disenio.style.paddingTop = '75px'
const h1disenio = document.createElement('h2')
h1disenio.classList.add('color-custom-blue')
const fila_dise = document.createElement('div')
fila_dise.setAttribute('class','row')
h1disenio.textContent = 'PROYECTOS DE DISEÑO'
disenio.appendChild(h1disenio)
disenio.appendChild(fila_dise)
gallery.appendChild(disenio)
//ARREGLOS
const br = document.createElement("br")
const br1 = document.createElement("br")
//CONTENIDO DE PROYECTOS


const projectDetails = document.createElement('div')
projectDetails.setAttribute('id','projectDetails')
projectDetails.classList.add('container')
projectDetails.classList.add('p-4')
// Función para generar la galería de proyectos
function generateGallery(tipo,row_tipo,projects) {
  projects.forEach((project, index) => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project')
    projectDiv.classList.add('col-md-4')
    projectDiv.classList.add('p-3')
    projectDiv.innerHTML = `
    <div class="image-card cursor-pointer">
      <img src="${project.imagen}" alt="${project.titulo}" class="img-fluid box-shadow">
      <div class="image-overlay">${project.titulo}</div>
    </div>
    `;
    
    projectDiv.addEventListener('click', () => {
      
      main.innerHTML=""
      main.appendChild(projectDetails)
      showProjectDetails(project,projectDetails);
      const newURL = `?section=proyectos&nombre=${encodeURIComponent(project.titulo)}`;
      window.history.pushState({ section: "proyectos", nombre: project.titulo }, "", newURL)
    });

    
    row_tipo.appendChild(projectDiv)
    tipo.appendChild(row_tipo)
  });
  gallery.appendChild(tipo)
  gallery.appendChild(br)
  gallery.appendChild(br1)
}
export{projectDetails}
// Función para mostrar los detalles del proyecto seleccionado
export function showProjectDetails(project,projectDetails) {
  projectDetails.innerHTML=""
  let contender = `
        <br>
          <div class="container col-lg-6 col-12">
            <h2 class="text-center color-custom-blue">${project.titulo}</h2>
            <img src="${project.imagen}" alt="${project.titulo}" class="img-fluid box-shadow img-gallery">
          </div>
        <br>`
  
  project.elementos.forEach(elemento => {
    contender += `

          <div class="container col-lg-6 col-12">`
    if (elemento.tipo === 'imagen') {
      contender += `<img src="${elemento.contenido}" alt="Imagen" class="img-fluid box-shadow">`
    } else if (elemento.tipo === 'parrafo') {
      contender += `<p class="text-dark" style="text-align: justify;">${elemento.contenido}</p>`
    }
    contender +=`</div>
      
      <br>`
  });
  projectDetails.innerHTML +=contender

  projectDetails.style.display = 'block';
}

button.addEventListener('click',e=>{
  main.innerHTML ="" 
  fila_arq.innerHTML=""
  fila_render.innerHTML=""
  fila_dise.innerHTML=""
  main.appendChild(gallery)
  //main.appendChild(projectDetails)
  generateGallery(arquitectura,fila_arq,arquidata)
  generateGallery(renderizacion,fila_render,renderdata)
  generateGallery(disenio,fila_dise,diseniodata)
  
})

function Verificar(){
  if (!target) {

  } else 
  main.innerHTML ="" 
  fila_arq.innerHTML=""
  fila_render.innerHTML=""
  fila_dise.innerHTML=""
  main.appendChild(gallery)
  //main.appendChild(projectDetails)
  generateGallery(arquitectura,fila_arq,arquidata)
  generateGallery(renderizacion,fila_render,renderdata)
  generateGallery(disenio,fila_dise,diseniodata)
  

  if(target.id=='proyectos-arquitectura'){
    arquitectura.scrollIntoView({ behavior: "smooth" });
  }else if(target.id=='proyectos-render'){
    renderizacion.scrollIntoView({ behavior: "smooth" });
  }else{
    disenio.scrollIntoView({ behavior: "smooth" });
  }
}
document.addEventListener("targetChanged", Verificar); 

export function Navegacion_proyectos(){
  main.innerHTML ="" 
  fila_arq.innerHTML=""
  fila_render.innerHTML=""
  fila_dise.innerHTML=""
  main.appendChild(gallery)
  //main.appendChild(projectDetails)
  generateGallery(arquitectura,fila_arq,arquidata)
  generateGallery(renderizacion,fila_render,renderdata)
  generateGallery(disenio,fila_dise,diseniodata)
}