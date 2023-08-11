window.addEventListener("click",e=>{
    console.log(e.target)
})


const button = document.querySelector("#inicio")
const main = document.querySelector("main")

function load(textoTitulo,textoContenido,Imagen_1,Imagen_2,Imagen_3){
    const contenido= `
    <div class="stage d-flex justify-content-end align-items-start">
        <div class="container">
            <div class="row d-flex justify-content-end">
                <div class="col-md-6 col-12">
                    <br><br>
                    <h1 class="text-dark">Nombre</h1>
                    <p class="text-dark">Este es un ejemplo de un div ubicado en la primera cuarta parte.</p>
                </div>
                <!--div class="col-md-9 col-12"></div-->
            </div>
        </div>
    </div>
    <br>
    <br>
    <!--Historias-->
    <div class="container resize">
        <div class="container container-overlay">
            <div class="overlay-top-left">
                <!-- Contenido del contenedor superpuesto arriba a la izquierda -->
                <img src="https://mir-s3-cdn-cf.behance.net/projects/808/64a959177248385.Y3JvcCwxNDAwLDEwOTUsMCwzMDE.jpg" alt="" class="img-fluid box-hadow">
            </div>
            <div class="overlay-bottom-right box-shadow">
                <!-- Contenido del contenedor superpuesto abajo a la derecha -->
                <h1 class="text-center text-dark">Contenido</h1>
                <p class="text-center text-dark">Este es un ejemplo de texto centrado en un div.
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae molestiae reprehenderit laborum minus quos officiis voluptatum qui deleniti, et animi sit architecto voluptas eligendi perspiciatis? Officia quas necessitatibus tenetur similique!
                </p>
            </div>
        </div>
        
    </div>
    <br>
    <br>
    <!--Especialidades-->
    <div class="specialties">
        <div class="container mt-5 mb-5">
            <div class="row">
                <h2 class="text-center text-white">Texto Centrado</h2>
                <div class="col">
                    <h1 class="text-center text-white">Texto Centrado</h1>
                    <p class="text-center text-white">Este es un ejemplo de texto centrado en un div.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae molestiae reprehenderit laborum minus quos officiis voluptatum qui deleniti, et animi sit architecto voluptas eligendi perspiciatis? Officia quas necessitatibus tenetur similique!
                    </p>
                </div>
                <div class="col">
                    <h1 class="text-center text-white">Texto Centrado</h1>
                    <p class="text-center text-white">Este es un ejemplo de texto centrado en un div.</p>
                </div>
                <div class="col">
                    <h1 class="text-center text-white">Texto Centrado</h1>
                    <p class="text-center text-white">Este es un ejemplo de texto centrado en un div.</p>
                </div>
            </div>
        </div>
    </div>
    <br>
    <br>
    <!--Mensaje-->
    <div class="container resize">
        <div class="container m-10">
            <div class="container container-overlay">
                <div class="overlay-top-left">
                    <!-- Contenido del contenedor superpuesto arriba a la izquierda -->
                    <img src="https://mir-s3-cdn-cf.behance.net/projects/808/1688be177151651.Y3JvcCwxMjY1LDk4OSwwLDMxNg.jpg" alt="" class="img-fluid box-hadow">
                </div>
                <div class="overlay-bottom-right">
                    <!-- Contenido del contenedor superpuesto abajo a la derecha -->
                    <div class="bg-dark text-white p-3 box-shadow">
                        <form id="contactform" action="https://formsubmit.co/davis036@hotmail.com" method="POST">
                            <div class="mb-3">
                                <div class="row">
                                    <div class="col">
                                        <label for="exampleInputEmail1" class="form-label">First Name</label>
                                        <input type="text" class="form-control" placeholder="First name" aria-label="First name">
                                    </div>
                                    <div class="col">
                                        <label for="exampleInputEmail1" class="form-label">Last Name</label>
                                        <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
                                    </div>
                                </div>
                                <br>
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                <br>
                                <label for="exampleInputEmail1" class="form-label">Mensaje</label>
                                <div class="form-floating">
                                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
                                        <label for="floatingTextarea2">Comments</label>
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
    </main>

    <br>
    <br>`
    return contenido
}
button.addEventListener('click',e=>{
    main.innerHTML ="" 
    const context = load("Titulo","texto","../img/imagen1.png","../img/imagen2.jpg","../img/imagen3.jpg")

    main.innerHTML += context

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

})






