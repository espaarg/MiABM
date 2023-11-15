import { useNavigate } from 'react-router-dom';
import '../../styles/HeaderStyle.css';
import BotonIngresar from "../ModalIngreso/BotonIngresar";

const Header = () => {

    const navigate = useNavigate();

    return (
<>
<header>
        <div className="header">
                
                    <img src="https://raw.githubusercontent.com/Facustriker/El-buen-sabor---Grupo-Front-eo/main/Assets/logoPNG.png" 
                    id="logoBSArriba" alt="logoBuenSabor"/>
                
            <div> 
                <div id="arriba">
                    
                        <button className="buttonA">Home</button> 
                    
                    
                        <button className="buttonA">Productos</button>
                    
                    
                        <button className="buttonA">Contactos</button>

                        <button onClick={()=> navigate ('/administracion')} className="buttonA"  >Administracion</button>

                    
                </div>
            </div>
            <div className="barraBuscar">
                <input type="text" className="cajaBuscar" placeholder="Buscar..."/>
                
                    <button type="submit" className="botonLupa"><img src="https://raw.githubusercontent.com/Facustriker/El-buen-sabor---Grupo-Front-eo/main/Assets/logoLupa.jpg" 
                        alt="submit" className="imagenLupa"/></button>
                
            </div>
            <div><BotonIngresar/></div>
        </div>
        <div className="lineaBordo"/>
</header>

    {/* 

    <Navbar bg="dark" variant="dark">
    <Navbar.Brand onClick={() => navigate('/')}>Navbar</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/componentes')}>Componentes</Nav.Link>
            <Nav.Link onClick={() => navigate('/administracion')}>Administracion</Nav.Link>
        </Nav>
    </Navbar>
    
    */}
</>

    )

} 

export default Header;
