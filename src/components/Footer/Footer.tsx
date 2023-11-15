import '../../styles/FooterStyle.css'

const Footer = () => {

    return (
<>

<footer> 
        <div className="lineaNegraFooter"></div>
        <div className="lineaBordoFooter"></div>
        <div className="containerFooter">
            <div className="parte1">
                <div id="APPcontainer">
                    <div id="colTextoApp">
                        
                            <button className="button buttonApp">Descarga la App</button> <br/>
                        
                        <h5 className="texto">Descarga la App para tu smartphone</h5>
                    </div>
                    <div id="Apps">
                        
                            <img src="https://raw.githubusercontent.com/Facustriker/El-buen-sabor---Grupo-Front-eo/main/Assets/logoPlay.png" 
                            className="imagePlay"/>
                       
                            <img src="https://raw.githubusercontent.com/Facustriker/El-buen-sabor---Grupo-Front-eo/main/Assets/logoApple.png" 
                            className="imageApple"/>
                        
                    </div>
                </div>
                <div id="logoBSFooter">
                    <img src="https://raw.githubusercontent.com/Facustriker/El-buen-sabor---Grupo-Front-eo/main/Assets/logoBS.png" 
                    style={{width:'60px', height: '60px'}}/>
                </div>
                <div id="socialContenedor">
                    <h4 className="texto" id="seguinosEn">Seguinos en:</h4>
                    <div id="imagenNombreContenedor">
                        <div id="instagram">
                            
                                <img src="https://raw.githubusercontent.com/Facustriker/El-buen-sabor---Grupo-Front-eo/main/Assets/logo%20Insta.png" 
                            className="imageInsta"/>
                            
                                <button className="button buttonUp">Instagram</button>
                            
                        </div>
                        <div id="facebook">
                            
                                <img src="https://raw.githubusercontent.com/Facustriker/El-buen-sabor---Grupo-Front-eo/main/Assets/logo%20Face.png" 
                                className="imageFace"/>
                
                                <button className="button buttonUp">Facebook</button> <br/>
                            
                        </div> 
                    </div>
                </div>
            </div>     
            <div className="parte2">
                <div id="abajo">
                    
                        <button className="button buttonAb">Sobre nosotros</button> 
            
                        <button className="button buttonAb">Ayuda</button>
                   
                        <button className="button buttonAb">Términos y condiciones</button>
                   
                </div>
            </div>
        </div>
    </footer>


    {/* 

    <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Footer Content</h5>
                <p>Here you can use rows and columns to organize your footer content.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                </ul>
            </div>
            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
    </div>

</footer>
    
    */}
</>

    )

} 

export default Footer;