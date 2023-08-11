import {projects} from './datos.js'

const button = document.querySelector("#proyectos")
const main = document.querySelector("main")

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
const row = document.createElement('div')
row.setAttribute('class','row')
const projectDetails = document.createElement('div')
projectDetails.setAttribute('id','projectDetails')
projectDetails.classList.add('container')
projectDetails.classList.add('p-4')
// Función para generar la galería de proyectos
function generateGallery() {
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

    row.appendChild(projectDiv);
  });
  gallery.appendChild(row)
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
      <br>`
  });
  projectDetails.innerHTML +=contender

  projectDetails.style.display = 'block';
}
button.addEventListener('click',e=>{
  main.innerHTML ="" 
  row.innerHTML=""
  main.appendChild(gallery)
  //main.appendChild(projectDetails)
  generateGallery();
})
