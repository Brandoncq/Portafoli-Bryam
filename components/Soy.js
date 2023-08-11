
const button = document.querySelector("#soy")
const main = document.querySelector("main")

function load(textoTitulo,textoContenido,imagen){
    const contenido= `

    <div class="box-content">
    <br>
    <br>
    <br>
        <div class="container">
            <div class="row">
                <div class="col bg-custom">
                    <h1 class="text-center text-white">${textoTitulo}</h1>
                    <p class="text-center">
                        ${textoContenido}
                    </p>     
                </div>
                <div class="col bg-custom">
                    <img src="${imagen}" class="img-fluid box-shadow">
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
    const context = load("Titulo","texto","https://mir-s3-cdn-cf.behance.net/projects/808/d617d2177155837.Y3JvcCwxNDAwLDEwOTUsMCwyMjg.jpg")

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