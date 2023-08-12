window.addEventListener("click",e=>{
    console.log(e.target)
})


const button = document.querySelector("#inicio")
const main = document.querySelector("main")

function load(textoTitulo,textoContenido,Imagen_1,Imagen_2,Imagen_3){
    const contenido= `
    <div class="stage">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-6">
                        <div class="d-flex align-items-center align-items-md-start">
                            <div class="d-flex align-items-center logo">
                                <br>
                                <img src="https://drive.google.com/uc?id=1hOmjt7w2Ae4QWKRhCTZ32V8pLSrEwce2" alt="" class="img-fluid fs-3 me-md-3 mb-3 mb-md-0" style="max-width: 150px; height: auto;">
                                <div>
                                    <div class="row">
                                        <h1 class="color-custom-blue mb-0 custom-font">TALVEZARQUITECTOS</h1>
                                    </div>
                                    
                                    <p class="text-white">UN ESPACIO PROPIO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <br>
        
        <!--Especialidades-->
            <div class="specialties">
                <div class="container mt-5 mb-5">
                    <div class="row">
                        <h3 class="text-center">NUESTROS TRABAJOS</h3>
                        <div class="col">
                            <div class="d-flex align-items-center justify-content-center">
                                <i class='bx bx-home proyectos-arquitectura' id="proyectos-arquitectura"></i>  
                            </div>
                            <h3 class="text-center" id="proyectos">PROYECTOS DE ARQUITECTURA</h3>
                            <!--p class="text-center">Este es un ejemplo de texto centrado en un div.
                                Lorem ipsum dolor sit amet conses
                            </p-->
                        </div>
                        <div class="col">
                            <div class="d-flex align-items-center justify-content-center">
                                <i class='bx bx-cube proyectos-render' id="proyectos-render"></i>
                            </div>
                            <h3 class="text-center" id="proyectos">RENDERIZACIÓN</h3>
                            <!--p class="text-center">Este es un ejemplo de texto centrado en un div.
                                Lorem ipsum dolor sit amet conses
                            </p-->
                        </div>
                        <div class="col">
                            <div class="d-flex align-items-center justify-content-center">
                                <i class='bx bx-pen proyectos-disenio' id="proyectos-disenio"></i>
                            </div>
                            <h3 class="text-center" id="proyectos">PROYECTOS DE DISEÑOS</h3>
                            <!--p class="text-center">Este es un ejemplo de texto centrado en un div.
                                Lorem ipsum dolor sit amet conses
                            </p-->
                        </div>
                </div>
            </div>
            <br>
            <br>
            <div class="imagenes-carrusel p-6">
                <div class="container ">
                    <div class="row">
                        <div class="col-lg-6 col-12">
                            <div class="container">
                                <div id="carouselExample" class="carousel slide">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="https://mir-s3-cdn-cf.behance.net/projects/808/d617d2177155837.Y3JvcCwxNDAwLDEwOTUsMCwyMjg.jpg" class="d-block img-carousel img-fluid" alt="..." data-bs-toggle="modal" data-bs-target="#fullscreenModal">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://mir-s3-cdn-cf.behance.net/projects/808/1688be177151651.Y3JvcCwxMjY1LDk4OSwwLDMxNg.jpg" class="d-block img-carousel img-fluid" alt="..." data-bs-toggle="modal" data-bs-target="#fullscreenModal">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://mir-s3-cdn-cf.behance.net/projects/808/5b75d1177021335.Y3JvcCwxOTk5LDE1NjQsMCwyMTc.jpg" class="d-block img-carousel img-fluid" alt="..." data-bs-toggle="modal" data-bs-target="#fullscreenModal">
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
                        <div class="col-lg-6 col-12">
                            <img src="https://drive.google.com/uc?id=1RcY6Dad-MUdoKVDZRka-iB_S7_ZZpR1v" class="img-fluid">
                        </div>
                    </div>   
                </div>
            </div>
            <br>
            <br>
        
            <br>
            <!-- Modal en pantalla completa -->
            <div class="modal fade" id="fullscreenModal" tabindex="-1" aria-labelledby="fullscreenModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div id="fullscreenCarousel" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="https://mir-s3-cdn-cf.behance.net/projects/808/d617d2177155837.Y3JvcCwxNDAwLDEwOTUsMCwyMjg.jpg" class="d-block img-carousel img-fluid " alt="...">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="https://mir-s3-cdn-cf.behance.net/projects/808/1688be177151651.Y3JvcCwxMjY1LDk4OSwwLDMxNg.jpg" class="d-block img-carousel img-fluid " alt="...">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="https://mir-s3-cdn-cf.behance.net/projects/808/5b75d1177021335.Y3JvcCwxOTk5LDE1NjQsMCwyMTc.jpg" class="d-block img-carousel img-fluid " alt="..." >
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
            <br>
        <div class="box-content">
            <br>
            <br>
            <!--Mensaje-->
            <div class="container">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-12">
                            <!-- Contenido del contenedor superpuesto arriba a la izquierda -->
                            <h1 class="text-center text-white">Contactos:</h1>
                            <p class="text-center text-white">
                                talvezarquitectos@gmail.com
                            </p>
                        </div>
                        <div class="col-lg-6 col-12">
                            <!-- Contenido del contenedor superpuesto abajo a la derecha -->
                            <div class="text-white p-3 box-shadow">
                                <form id="contactform" action="https://formsubmit.co/davis036@hotmail.com" method="POST">
                                    <div class="mb-3">
                                        <div class="row">
                                            <div class="col">
                                                <label for="exampleInputEmail1" class="form-label">Nombres:</label>
                                                <input type="text" class="form-control" placeholder="" aria-label="First name">
                                            </div>
                                            <div class="col">
                                                <label for="exampleInputEmail1" class="form-label">Apellidos:</label>
                                                <input type="text" class="form-control" placeholder="" aria-label="Last name">
                                            </div>
                                        </div>
                                        <br>
                                        <label for="exampleInputEmail1" class="form-label">Email:</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                        <br>
                                        <label for="exampleInputEmail1" class="form-label">Mensaje:</label>
                                        <div class="form-floating">
                                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
                                                <!--label for="floatingTextarea2">Comments</label-->
                                        </div>
                                        <br>
                                        <button type="submit" class="btn btn-secondary">Enviar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
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
    const context = load("Titulo","texto","../img/imagen1.png","../img/imagen2.jpg","../img/imagen3.jpg")

    main.innerHTML += context

    const contenedor = document.querySelectorAll('.container-overlay')
    const reDim_1= document.querySelectorAll('.overlay-top-left')
    const reDim_2= document.querySelectorAll('.overlay-bottom-right')
    const logo= document.querySelector('.logo')

    function aplicarMediaQuery() {
        
        if (window.innerWidth >= 768) { // Cambia el ancho según tu necesidad
            console.log("hello-computer")
            if(logo.classList.contains("acomodar")){
                logo.classList.remove('acomodar')
            }
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
            if(logo.classList.contains("acomodar")==false){
                logo.classList.add('acomodar')
            }
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

})
let target = '';



document.querySelector("main").addEventListener("click", function(event) {
  const clickedTarget = event.target;
  
  if (clickedTarget.classList.contains("proyectos-arquitectura")) {
    
    target = clickedTarget
    console.log("arq")
    document.dispatchEvent(new Event("targetChanged"));
    // Realizar otras acciones
  }
  if (clickedTarget.classList.contains("proyectos-render")) {
    target = clickedTarget
    console.log("render")
    document.dispatchEvent(new Event("targetChanged"));
    // Realizar otras acciones
  }
  if (clickedTarget.classList.contains("proyectos-disenio")) {
    target = clickedTarget
    console.log("diseño")
    document.dispatchEvent(new Event("targetChanged"));
    // Realizar otras acciones
  }
});
export {target}




