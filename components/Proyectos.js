import {arquidata} from './datos-arqui.js'
import {diseniodata} from './datos-disenio.js'
import {renderdata} from './datos-render.js'
import { target } from './Inicio.js';



const button = document.querySelector("#proyectos")
const main = document.querySelector("main")

const buttonarq = document.querySelectorAll("#proyectos-arquitectura")
const buttonrender = document.querySelectorAll("#proyectos-render")
const buttondisenio = document.querySelectorAll("#proyectos-disenio")

/*const projectDetails = document.createElement('div')
projectDetails.setAttribute('id','projectDetails')

async function loadimg(){
  let contenidoimg= ``
  const response = await fetch('../datos.json');
  const data = await response.json();
    data.forEach(proyecto => {
      contenidoimg += `
      <div class="col-md-4 p-3">
        <div class="image-card cursor-pointer">
          <img src="${proyecto.imagen}" class="img-fluid">
          <div class="image-overlay gallery-img">${proyecto.titulo}</div>
        </div>
      </div>`
      const gallery = document.querySelector('.gallery-img')  
      gallery.addEventListener('click', () => {
        showProjectDetails(proyecto);
      });
    });

  return contenidoimg
}


async function load(){
  const contenido = `
      <div class="container mt-5 gallery">
        <div class="row">
          ${await loadimg()}
        </div>
      </div>`;
    
  main.innerHTML = contenido;
}

const gallery = document.querySelector('.gallery');


button.addEventListener('click',e=>{
    main.innerHTML ="" 
    load()
})

//Cargar Contenido de n Proyectos


function Contenido(){
  fetch('../datos.json')
  .then(response => response.json())
  .then(data => {
    // Ahora puedes acceder a los objetos JSON en el array 'data'
    tamanioDelArray = data.length
    data.forEach(proyecto => {
      proyecto.addEventListener
    });
  })
  .catch(error => {
    console.log('Error:', error);
  });
}*/


const gallery = document.createElement('div')
gallery.setAttribute('class','gallery')
gallery.classList.add('container')
gallery.classList.add('mt-5')

//TIPOS DE PROYECTOS
const arquitectura = document.createElement('div')
arquitectura.setAttribute('id','content-arquitectura')
arquitectura.classList.add('container')
arquitectura.classList.add('text-center')
const h1arquitectura = document.createElement('h2')
h1arquitectura.classList.add('color-custom-blue')
const fila_arq = document.createElement('div')
fila_arq.setAttribute('class','row')
h1arquitectura.textContent = 'PROYECTOS DE ARQUITECTURA'
arquitectura.appendChild(h1arquitectura)
arquitectura.appendChild(fila_arq)
gallery.appendChild(arquitectura)


const renderizacion = document.createElement('div')
renderizacion.setAttribute('id','content-render')
renderizacion.classList.add('container')
renderizacion.classList.add('text-center')
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
const h1disenio = document.createElement('h2')
h1disenio.classList.add('color-custom-blue')
const fila_dise = document.createElement('div')
fila_dise.setAttribute('class','row')
h1disenio.textContent = 'PROYECTOS DE DISEÑO'
disenio.appendChild(h1disenio)
disenio.appendChild(fila_dise)
gallery.appendChild(disenio)

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
      showProjectDetails(project);
    });

    
    row_tipo.appendChild(projectDiv)
    tipo.appendChild(row_tipo)
  });
  gallery.appendChild(tipo)
}

// Función para mostrar los detalles del proyecto seleccionado
function showProjectDetails(project) {
  projectDetails.innerHTML=""
  let contender = `
        <br>
          <div class="container col-6">
            <img src="${project.imagen}" alt="${project.titulo}" class="img-fluid box-shadow">
            <h2 class="text-center text-dark">${project.titulo}</h2>
          </div>
        <br>`
  
  project.elementos.forEach(elemento => {
    contender += `
          <br>
          <div class="container col-6">`
    if (elemento.tipo === 'imagen') {
      contender += `<img src="${elemento.contenido}" alt="Imagen" class="img-fluid box-shadow">`
    } else if (elemento.tipo === 'parrafo') {
      contender += `<p class="text-center text-dark">${elemento.contenido}</p>`
    }
    contender +=`</div>
      <br>
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