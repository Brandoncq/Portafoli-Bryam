
const button = document.querySelector("#soy")
const main = document.querySelector("main")

function load(textoTitulo,textoContenido,imagen){
    const contenido= `

    <div class="bg-white">
    <br>
    <br>
    <br>
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-12 bg-custom">
                    <img src="${imagen}" class="img-fluid box-shadow">
                    </p>     
                </div>
                <div class="col-lg-5 col-12 bg-custom d-flex acomodar justify-content-center">
                    <h1 class="text-center text-white">${textoTitulo}</h1>
                    <p class="text-center">
                        ${textoContenido}
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
    const context = load("¿QUIENES SOMOS?","TALVEZARQUITECTOS, surge con la premisa de explorar enfoques innovadores y diversas disciplinas que enriquezcan la arquitectura. Bajo la dirección de Fabiana Valdivia y Andre Ccoica, fusiona la rigurosidad arquitectónica con la influencia del arte en su conjunto. Nos destacamos en proyectos residenciales y en la visualización arquitectónica, con un enfoque arraigado en diseños simples y funcionales. Cada proyecto encarna una oportunidad para concebir soluciones inspiradoras y versátiles. Te extendemos una cordial invitación a acompañarnos en la exploración de las posibilidades de tu próximo proyecto.","https://mir-s3-cdn-cf.behance.net/projects/808/d617d2177155837.Y3JvcCwxNDAwLDEwOTUsMCwyMjg.jpg")

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