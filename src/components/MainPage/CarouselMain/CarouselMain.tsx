import {Carousel} from "react-bootstrap"

const CarouselMain = () => {
  return (
    <>
    
<div id="contenedorCarrusel">
    <div className="fondo">     
      <div className="contenedorTextoBoton"> 
          <h1 id="TextoCabecera">Pedilo online y te lo <br/>
              llevamos a tu casa!</h1>
          <p>
              Además de deleitar tu paladar, también nos preocupamos por 
              brindarte comodidad y facilidad. Nuestra plataforma de pedidos en línea 
              te permite explorar nuestro menú, personalizar tus selecciones 
              y elegir entre opciones de entrega rápida a tu puerta o recogida 
              conveniente en nuestro local. Queremos que tu experiencia sea perfecta 
              desde el momento en que entras en nuestro mundo culinario.
          </p>
          <a href="http://127.0.0.1:5500/MAIN%20PAGE/productos.html">
              <center>
                  <button className="boton" id="botonIniciotext">Ir a Catalogo</button>
              </center>
          </a>
      </div>
      <div>
        <Carousel>

          <Carousel.Item>
                <img src="https://raw.githubusercontent.com/Facustriker/El-buen-sabor---Grupo-Front-eo/main/Assets/whooper-burguer-carusel.png" 
                alt="giant-burguer" />
            <Carousel.Caption>
              <h3>Whooper Burguer</h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>


  
          <Carousel.Item>
            <img src="https://raw.githubusercontent.com/Facustriker/El-buen-sabor---Grupo-Front-eo/main/Assets/whooper-burguer-carusel.png" 
            alt="super-burguer" />
            <Carousel.Caption>
              <h3>Whooper Burguer</h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>


  
          <Carousel.Item>
            <img src="https://raw.githubusercontent.com/Facustriker/El-buen-sabor---Grupo-Front-eo/main/Assets/whooper-burguer-carusel.png" 
            alt="chicken-burguer" />
            <Carousel.Caption>
              <h3>Whooper Burguer</h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>


        </Carousel>
      </div>
    </div>
</div>


  </>

  )
}

export default CarouselMain