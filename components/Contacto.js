const button = document.querySelector("#contacto")
const main = document.querySelector("main")

function load(){
    const contenido= `
        <br>
        <br>
        <!--Especialidades-->
        <div class="contacto">
            <div class="container mt-5 mb-5">
                <div class="row">
                    <div class="col-lg-6 col-12">
                        <strong><p class="text-white">COMENTARIO</p></strong>
                        <p class="text-white" style="text-align: justify;">
                        ¿Necesitas orientación en tu proyecto arquitectónico o tienes preguntas sobre diseño y construcción? Estamos aquí para ayudarte.
                        </p>
                    </div>
                    <div class="col-lg-6 col-12">
                    <div class="text-white p-3 m-2">
                        <!--h1 class="text-white">COMENTARIO</h1-->
                        <form id="contactform" action="https://formsubmit.co/talvezarquitectos2@gmail.com" method="POST">
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
export function Navegacion_contacto(){
    main.innerHTML ="" 
    const context = load()
    main.innerHTML += context
}