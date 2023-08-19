const button = document.querySelector("#inicio")
const main = document.querySelector("main")

function load(){
    const contenido= `
    <div class="stage">
            <div class="container">
                <div class="row col-12">
                    <!--div class="col-md-12 col-6"-->
                        <div class="d-flex custom-logo">
                            <div class="d-flex align-items-center justify-content-center logo col-12">
                                
                                <img src="img/logo azul recortado.png" alt="" class="img-fluid fs-3 me-md-3 mb-0 mb-md-0" style="max-width: 130px; height: auto;">
                                <div class="d-flexalign-items-center m-0 p-0">
                                    <div class="row">
                                        <h1 class="color-custom-blue mb-0 custom-font">TALVEZARQUITECTOS</h1>
                                    </div>
                                    
                                    <p class="color-custom-blue">UN ESPACIO PROPIO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                <!--/div-->
            </div>
        </div>
        <br>
        <br>
        
        <!--Especialidades-->
            <div class="specialties">
                <div class="container mt-5 mb-5">
                    <div class="row">
                        <h5 class="text-center">NUESTROS TRABAJOS</h5>
                        <br>
                        <br>
                        <div class="col">
                            <div class="d-flex align-items-center justify-content-center p-3">
                                <i class='bx bx-home proyectos-arquitectura proyecto' id="proyectos-arquitectura"></i>  
                            </div>
                            <h3 class="text-center" id="proyectos">PROYECTOS ARQUITECTÓNICOS</h3>
                            <!--p class="text-center">Este es un ejemplo de texto centrado en un div.
                                Lorem ipsum dolor sit amet conses
                            </p-->
                            <br>
                        </div>
                        
                        <div class="col">
                            <div class="d-flex align-items-center justify-content-center p-3">
                                <i class='bx bx-cube proyectos-render proyecto' id="proyectos-render"></i>
                            </div>
                            <h3 class="text-center" id="proyectos">RENDERIZACIÓN</h3>
                            <!--p class="text-center">Este es un ejemplo de texto centrado en un div.
                                Lorem ipsum dolor sit amet conses
                            </p-->
                            <br>
                        </div>
                        
                        <div class="col">
                            <div class="d-flex align-items-center justify-content-center p-3">
                                <i class='bx bx-pen proyectos-disenio proyecto' id="proyectos-disenio"></i>
                            </div>
                            <h3 class="text-center" id="proyectos">PROYECTOS DE DISEÑOS</h3>
                            <!--p class="text-center">Este es un ejemplo de texto centrado en un div.
                                Lorem ipsum dolor sit amet conses
                            </p-->
                            <br>
                        </div>
                        
                </div>
            </div>
            <br>
            <br>
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-12 p-2">
                        <img src="https://drive.google.com/uc?id=12-hjiFlemEJMI0XADz9v-EhDdhLelLQt" class="img-fluid" alt="...">
                    </div>
                    <div class="col-lg-3 col-12 p-2">
                        <img src="https://drive.google.com/uc?id=1kXM20sT6Jq3gJdNkI9hJHG1uq5bT-05L" class="img-fluid" alt="...">
                    </div>
                    <div class="col-lg-3 col-12 p-2">
                        <img src="https://drive.google.com/uc?id=11_yGymuC_SHw4svkGXc5YwXvu66c-nuj" class="img-fluid" alt="...">
                    </div>
                    <div class="col-lg-3 col-12 p-2">
                        <img src="https://drive.google.com/uc?id=1fZfz_j3bS_5OPilXh5NiZP0hqFkttryV" class="img-fluid" alt="...">
                    </div>
                    <div class="col-lg-3 col-12 p-2">
                        <img src="https://drive.google.com/uc?id=1gx7_16gPs3cAHfPtsUigtC2YqzwmsDB1" class="img-fluid" alt="...">
                    </div> 
                    <div class="col-lg-3 col-12 p-2">
                        <img src="https://drive.google.com/uc?id=1cnGMWcepS-PWKma2gVBspOB2V7xMRdLn" class="img-fluid" alt="...">
                    </div>
                    <div class="col-lg-3 col-12 p-2">
                        <img src="https://drive.google.com/uc?id=1ZoYg5R7S6qMhee-MF1go5Fqexy-8jv9S" class="img-fluid" alt="...">
                    </div>
                    <div class="col-lg-3 col-12 p-2">
                        <img src="https://drive.google.com/uc?id=1zVnn2-nTCmIg_lczYYh9ebrDB7zElAdI" class="d-block img-carousel img-fluid" alt="..." data-bs-toggle="modal" data-bs-target="#fullscreenModal">
                    </div>
                </div>
            </div>
            <br>
            <br>
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
                            <strong><p class="text-center text-white">Contactos:</p></strong>
                            <p class="text-center text-white">
                                talvezarquitectos2@gmail.com
                            </p>
                        </div>
                        <div class="col-lg-6 col-12">
                            <!-- Contenido del contenedor superpuesto abajo a la derecha -->
                            <div class="text-white p-3">
                                <form id="contactform" action="https://formsubmit.co/talvezarquitectos2@gmail.com" method="POST">
                                    <div class="mb-3">
                                        <div class="row">
                                            <div class="col">
                                                <label for="exampleInputEmail1" class="form-label">Nombres:</label>
                                                <input type="text" class="form-control" placeholder="" aria-label="First name" name="Nombres:">
                                            </div>
                                            <div class="col">
                                                <label for="exampleInputEmail1" class="form-label">Apellidos:</label>
                                                <input type="text" class="form-control" placeholder="" aria-label="Last name" name="Apellidos:">
                                            </div>
                                        </div>
                                        <br>
                                        <label for="exampleInputEmail1" class="form-label">Email:</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="Email:">
                                        <br>
                                        <label for="exampleInputEmail1" class="form-label">Mensaje:</label>
                                        <div class="form-floating">
                                            <textarea class="form-control" placeholder="" id="floatingTextarea2" style="height: 100px" name="Mensaje:"></textarea>
                                                <!--label for="floatingTextarea2">Comments</label-->
                                        </div>
                                        <br>
                                        <input type="submit" value="Enviar" class="btn">
                                        <!--input type="hidden" name="_next" value="https://talvezarquitectos-c4d51.web.app">
                                        <input type="hidden" name="_captcha" value="false"-->
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
    const context = load()

    main.innerHTML += context


    const logo= document.querySelector('.logo')

    function aplicarMediaQuery() {
        
        if (window.innerWidth >= 768) { // Cambia el ancho según tu necesidad
            //console.log("hello-computer")
            if(logo.classList.contains("acomodar")){
                logo.classList.remove('acomodar')
            }

        } else {
            //console.log("hello-movil")
            if(logo.classList.contains("acomodar")==false){
                logo.classList.add('acomodar')
            }

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
    //console.log("arq")
    document.dispatchEvent(new Event("targetChanged"));
    // Realizar otras acciones
  }
  if (clickedTarget.classList.contains("proyectos-render")) {
    target = clickedTarget
    //console.log("render")
    document.dispatchEvent(new Event("targetChanged"));
    // Realizar otras acciones
  }
  if (clickedTarget.classList.contains("proyectos-disenio")) {
    target = clickedTarget
    //console.log("diseño")
    document.dispatchEvent(new Event("targetChanged"));
    // Realizar otras acciones
  }
});
export {target}

export function Navegacion_inicio(){
    main.innerHTML ="" 
    const context = load()

    main.innerHTML += context

    const logo= document.querySelector('.logo')

    function aplicarMediaQuery() {
        
        if (window.innerWidth >= 768) { // Cambia el ancho según tu necesidad
            //console.log("hello-computer")
            if(logo.classList.contains("acomodar")){
                logo.classList.remove('acomodar')
            }
            //miDiv.classList.add("elemento-grande");

        } else {
            //console.log("hello-movil")
            if(logo.classList.contains("acomodar")==false){
                logo.classList.add('acomodar')
            }

        }
    }
    
    // Llama a la función al cargar la página y cuando la ventana cambie de tamaño
    aplicarMediaQuery();
    window.addEventListener("resize", aplicarMediaQuery);

}


