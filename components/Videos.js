const button = document.querySelector("#videos")
const main = document.querySelector("main")

function load(textoTitulo,textoContenido){
    const contenido= `
        <br>
        <br>
        <!--Historias-->
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-12">

                    <h1 class="color-custom-blue">${textoTitulo}</h1>
                    <p class="color-custom-blue" style="text-align: justify;">
                        ${textoContenido}
                    </p>
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
    const context = load("Machu Picchu - The Strokes","The Strokes es una banda de rock estadounidense formada en Nueva York en 1998. Sus miembros originales son Julian Casablancas (voz principal), Nick Valensi (guitarra), Albert Hammond Jr. (guitarra), Nikolai Fraiture (bajo) y Fabrizio Moretti (batería). Conocidos por su estilo característico de garage rock, indie rock y post-punk revival, The Strokes ganó prominencia con su álbum debut 'Is This It' en 2001, el cual fue aclamado por la crítica y un éxito comercial. Su música enérgica y cruda, con guitarras distorsionadas y letras a menudo irónicas, ayudó a revitalizar el género del rock en la década de 2000. El éxito continuó con álbumes como 'Room on Fire' (2003) y 'First Impressions of Earth' (2006). A lo largo de su carrera, The Strokes experimentó con diversos sonidos y estilos, influyendo en la escena musical y marcando tendencias. Su impacto duradero se evidenció en su regreso con el álbum 'The New Abnormal' (2020), el cual fue bien recibido. A lo largo de los años, The Strokes se ha mantenido como una banda influyente que dejó una huella significativa en la música rock moderna. Su distintiva voz de Julian Casablancas, junto con su enfoque crudo y su actitud fresca, los convierten en una de las bandas más icónicas del siglo XXI.")

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