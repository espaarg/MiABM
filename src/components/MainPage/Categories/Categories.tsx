
const LogoImages = () => {
  return (
    <>
    
    <div id="lineaBordoCategoria"> 
        <button id="textoCategorias">
            CATEGORIAS
        </button>
    </div>
    <div id="contenedorImagenesComida"> 
        <a href="http://127.0.0.1:5500/MAIN%20PAGE/productos/hamburguesas.html"> 
            <button id="botonIconoHamburguesa">
                <div id="imagenHamburguesaDIV">
                    <img src="https://raw.githubusercontent.com/Facustriker/El-buen-sabor---Grupo-Front-eo/main/Assets/iconoHamburguesa.png"
                    className="imagenHamburguesa"/>
                </div>
                <div id="textoIconoHamburguesa">
                    HAMBURGUESAS
                </div>
            </button>
        </a> 
        <a href="http://127.0.0.1:5500/MAIN%20PAGE/productos/pizzas.html"> 
            <button id="botonIconoPizza">
                <div id="imagenPizzaDIV"> 
                    <img src="https://raw.githubusercontent.com/Facustriker/El-buen-sabor---Grupo-Front-eo/main/Assets/iconoPizza.png"
                    className="imagenPizza"/>
                </div>
                <div id="textoIconoPizza"> 
                    PIZZAS
                </div>
            </button>
        </a>
        <a href="http://127.0.0.1:5500/MAIN%20PAGE/productos/papasFritas.html">
            <button id="botonIconoPapas">
                <div id="imagenPapasDIV">
                    <img src="https://raw.githubusercontent.com/Facustriker/El-buen-sabor---Grupo-Front-eo/main/Assets/iconoPapasFritas.png"
                    className="imagenPapas"/>
                </div>
                <div id="textoIconoPapas">
                    PAPAS FRITAS
                </div>
            </button>
        </a>
        <a href="http://127.0.0.1:5500/MAIN%20PAGE/productos/bebidas.html">
            <button id="botonIconoBebidas">
                <div id="imagenBebidasDIV">
                    <img src="https://raw.githubusercontent.com/Facustriker/El-buen-sabor---Grupo-Front-eo/main/Assets/iconoBebidas.png"
                    className="imagenBebidas"/>
                </div>
                <div id="textoIconoBebidas">
                    BEBIDAS
                </div>
            </button>
        </a>
    </div>
    <div className="lineaBordoDivisoria"></div>

    </>
  )
}

export default LogoImages