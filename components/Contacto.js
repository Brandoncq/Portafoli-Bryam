const button = document.querySelector("#contacto")
const main = document.querySelector("main")

function load(){
    const contenido= `

        <br>
        <!--Especialidades-->
        <div class="contacto">
            <div class="container mt-5 mb-5">
                <div class="row">
                    <div class="col">
                        <h1 class="text-white">COMENTARIO</h1>
                        <p class="text-white" style="text-align: justify;">Este es un ejemplo de texto centrado en un div.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae molestiae reprehenderit laborum minus quos officiis voluptatum qui deleniti, et animi sit architecto voluptas eligendi perspiciatis? Officia quas necessitatibus tenetur similique!
                        </p>
                    </div>
                    <div class="col">
                    <div class="text-white p-3 m-2">
                        <!--h1 class="text-white">COMENTARIO</h1-->
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
                                <div class="row">
                                    <div class="col">
                                        <label for="exampleInputEmail1" class="form-label">Email:</label>
                                        <input type="text" class="form-control" placeholder="" aria-label="First name">
                                    </div>
                                    <div class="col">
                                        <label for="exampleInputEmail1" class="form-label">Asunto:</label>
                                        <input type="text" class="form-control" placeholder="" aria-label="Last name">
                                    </div>
                                </div>
                                <br>
                                <label for="exampleInputEmail1" class="form-label">Mensaje:</label>
                                <div class="form-floating">
                                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
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
        `
    return contenido
}
button.addEventListener('click',e=>{
    main.innerHTML ="" 
    const context = load()

    main.innerHTML += context

})