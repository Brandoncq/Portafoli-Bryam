
const button = document.querySelector("#soy")
const main = document.querySelector("main")

function load(textoTitulo,Nombre,textoContenido,imagen){
    const contenido= `

    <div class="bg-white">
    <br>
    <br>
    <br>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-12 bg-custom">
                    <img src="${imagen}" class="img-fluid box-shadow">
                    </p>     
                </div>
                <div class="col-lg-6 col-12 bg-custom d-flex acomodar justify-content-center">
                    <strong><p class="text-white">${textoTitulo}</p></strong>
                    <p style="text-align: justify;">
                        <strong>${Nombre}</strong>${textoContenido}
                    </p>     
                </div>
                
            </div>
        </div>
    <br>
    <br>
    </div>`
     
    return contenido
}
button.addEventListener('click',e=>{
    main.innerHTML ="" 
    const context = load("¿QUIÉNES SOMOS?","TALVEZARQUITECTOS, ", "surge con la premisa de explorar enfoques innovadores y diversas disciplinas que enriquezcan la arquitectura. Bajo la dirección de Fabiana Valdivia y Andre Ccoica, fusiona la rigurosidad arquitectónica con la influencia del arte en su conjunto. Nos destacamos en proyectos residenciales y en la visualización arquitectónica, con un enfoque arraigado en diseños simples y funcionales. Cada proyecto encarna una oportunidad para concebir soluciones inspiradoras y versátiles. Te extendemos una cordial invitación a acompañarnos en la exploración de las posibilidades de tu próximo proyecto.","https://drive.google.com/uc?id=125dVxJKwu5me9BBlZnmV9yQD7RwJTqVl")

    main.innerHTML += context

    /*const contenedor_principal = document.createElement("div")``
    contenedorprincipal.classList.add("container")
    const contenedor_texto = document.createElement("div")
    contenedorprincipal.classList.add("container m-6")
    const contenedor_imagen = document.createElement("div")

    load
    contenedor_principal.appendChild(contenedor_texto)
    contenedor_principal.appendChild(contenedor_imagen)*/
    

})