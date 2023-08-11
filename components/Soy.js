
const button = document.querySelector("#soy")
const main = document.querySelector("main")

function load(textoTitulo,textoContenido,Imagen_1,Imagen_2,Imagen_3){
    const contenido= `
    <br>
    <br>
    <br>
    <div class="imagenes-carrusel p-6">
        <div class="container ">
            <div class="row">
                <div class="col-lg-6 col-12 m-6 p-6 d-flex align-items-center justify-content-center">
                    

                    <div class="container ">
                        <div class="container">
                            <h1 class="text-center text-white">${textoTitulo}</h1>
                            <p class="text-center text-white">
                            ${textoContenido}
                            </p>
                        </div>
                    </div>

                    
                </div>
                <div class="col-lg-6 col-12">
                    <div class="container">
                        <div id="carouselExample" class="carousel slide">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="${Imagen_1}" class="d-block img-carousel" alt="..." data-bs-toggle="modal" data-bs-target="#fullscreenModal">
                                </div>
                                <div class="carousel-item">
                                    <img src="${Imagen_2}" class="d-block img-carousel" alt="..." data-bs-toggle="modal" data-bs-target="#fullscreenModal">
                                </div>
                                <div class="carousel-item">
                                    <img src="${Imagen_3}" class="d-block img-carousel" alt="..." data-bs-toggle="modal" data-bs-target="#fullscreenModal">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal en pantalla completa -->
    <div class="modal fade" id="fullscreenModal" tabindex="-1" aria-labelledby="fullscreenModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <div id="fullscreenCarousel" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="${Imagen_1}" class="d-block img-carousel img-fluid " alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="${Imagen_2}" class="d-block img-carousel img-fluid " alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="${Imagen_3}" class="d-block img-carousel img-fluid " alt="..." >
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#fullscreenCarousel" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#fullscreenCarousel" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                            </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br>
    <br>`
    return contenido
}
button.addEventListener('click',e=>{
    main.innerHTML ="" 
    const context = load("Titulo","texto","https://mir-s3-cdn-cf.behance.net/projects/808/d617d2177155837.Y3JvcCwxNDAwLDEwOTUsMCwyMjg.jpg","https://mir-s3-cdn-cf.behance.net/projects/808/1688be177151651.Y3JvcCwxMjY1LDk4OSwwLDMxNg.jpg","https://mir-s3-cdn-cf.behance.net/projects/808/5b75d1177021335.Y3JvcCwxOTk5LDE1NjQsMCwyMTc.jpg")

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