const button = document.querySelector("#videos")
const main = document.querySelector("main")

function load(textoTitulo){
    const contenido= `
        <br>
        <br>
        <!--Historias-->
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-12">

                    <h1 class="color-custom-blue">${textoTitulo}</h1>

                </div>
                <div class="col-lg-6 col-12">
                    <!--video controls>
                        <source src="https://www.youtube.com/watch?v=kltYlbtgtgE" type="video/mp4">
                    </video-->
                    <div class="ratio ratio-16x9 box-shadow">
                        <iframe src="https://www.youtube.com/embed/Xt_F4J4O-xo" title="YouTube video" allowfullscreen></iframe>
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
    const context = load("Machu Picchu - The Strokes")

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