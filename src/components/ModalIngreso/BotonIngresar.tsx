import { useState } from "react";
import { Client } from "../../types/Client";
import { ModalType } from "../../types/ModalType";
import { Button } from "react-bootstrap";
import ModalIngreso from "./ModalIngreso";


const BotonIngresar = () => {

//Constante para inicializar un producto por defecto y que no salga error 'Undefined'
const initializableNewClient = (): Client => {
    return {
      nombre: "",
      apellido: "",
      usuario: "",
      telefono: 0,
      contrasena: "",
      repetirContrasena: "",
      email: "",
      direccion: "",
      departamento: "",
      fechaNacimiento: new Date()
    };
};

//Variable para tener como prop al producto
const [cliente, setCliente] = useState<Client>(initializableNewClient);

//Constantes para manejar el estado del modal
const [showModal, setShowModal] = useState(false);
const [modalType, setModalType] = useState<ModalType>(ModalType.NONE);

//Logica del modal
const handleClick = (cliente: Client, modal:ModalType) => {
    setCliente(cliente);
    setModalType(modal);
    setShowModal(true);
};


  return (
    <>
    <Button onClick={() => handleClick(initializableNewClient(), ModalType.CREATE)}
    className="buttonIngresar">Ingresar</Button>

    {showModal && (
      <ModalIngreso
      show={showModal}
      onHide={() => setShowModal(false)}
      modalType={modalType}
      cliente={cliente}
      />

    )}

    </>
  )
}

export default BotonIngresar