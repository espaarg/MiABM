import { Button, Form, Modal } from "react-bootstrap";
import { Client } from "../../types/Client";
import { ModalType } from "../../types/ModalType";
import * as Yup from 'yup';
import {useFormik} from "formik";
import { ClientService } from "../../services/ClientService";

type ModalIngresoProps = {

    show: boolean;
    onHide:() => void;
    modalType: ModalType;
    cliente: Client;
}


const ModalIngreso = ({show, onHide, cliente}: ModalIngresoProps) => {

    const handleSaveUpdate =async (cliente:Client) => {

      //Cambiar esto cuando se agregue una ID cliente
        try {
            const isNew = cliente.usuario;
            if (isNew) {
                await ClientService.createCliente(cliente);
            }else{
                await ClientService.updateCliente(cliente.usuario, cliente);
            }
            onHide();
        } catch (error) {
            console.error(error);
        }
        
    };
  
    const validationSchema = () => {

        return Yup.object().shape({
            nombre: Yup.string().required('Por favor, ingrese un nombre'),
            apellido: Yup.string().required('Por favor, ingrese un apellido'),
            usuario: Yup.string().required('Por favor, ingrese un usuario'),
            telefono: Yup.number().min(0).required('Por favor, ingrese un numero de telefono'),
            contrasena: Yup.string().required('Por favor, ingrese una contraseña'),
            repetirContrasena: Yup.string().required('Por favor, repita la contraseña').test('contraseña-igual', 'Las contraseñas no coinciden', function (value) {return value === this.parent.contraseña;}),
            email: Yup.string().required('Por favor, ingrese una direccion de correo electronico'),
            direccion: Yup.string().required('Por favor, ingrese una direccion'),
            departamento: Yup.string().required('Por favor, ingrese un departamento'),
            fechaNacimiento: Yup.date().required('Por favor, ingrese una fecha de nacimiento')
        });
    };


    const formik = useFormik({

        initialValues: cliente,
        validationSchema: validationSchema(),
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (object: Client) => handleSaveUpdate(object),        
    });
  
  
  
  
    return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="contenedorBotonesRegistrarseIngresar">
            <div id="fondoBotonesRegistrarseIngresar">
                <button className="botonParteSuperiorFormulario">Registrarse</button>
                <button className="botonParteSuperiorFormulario">Ingresar</button>
            </div>
          </div>

          <Form onSubmit={formik.handleSubmit} id="contenedorCamposFormulario">

            <div className="columna">
            <Form.Group className="mb-3" controlId="formNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                name="nombre"
                type="text"
                value={formik.values.nombre || ''}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={Boolean(formik.errors.nombre && formik.touched.nombre)}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.nombre}
              </Form.Control.Feedback>
            </Form.Group>
            

            <Form.Group className="mb-3" controlId="formUsuario">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                name="usuario"
                type="text"
                value={formik.values.usuario || ''}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={Boolean(formik.errors.usuario && formik.touched.usuario)}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.usuario}
              </Form.Control.Feedback>
            </Form.Group>


            <Form.Group className="mb-3" controlId="formContrasena">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                name="contrasena"
                type="password"
                value={formik.values.contrasena || ''}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={Boolean(formik.errors.contrasena && formik.touched.contrasena)}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.contrasena}
              </Form.Control.Feedback>
            </Form.Group>


            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="name@example.com"
                value={formik.values.email || ''}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={Boolean(formik.errors.email && formik.touched.email)}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.email}
              </Form.Control.Feedback>
            </Form.Group>


            <Form.Group className="mb-3" controlId="formFecha">
              <Form.Label>Fecha de nacimiento</Form.Label>
              <Form.Control
                name="fechaNacimiento"
                type="date"
                value={formik.values.fechaNacimiento ? formik.values.fechaNacimiento.toISOString().split('T')[0] : ''}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={Boolean(formik.errors.fechaNacimiento && formik.touched.fechaNacimiento)}
              />
              <Form.Control.Feedback type="invalid">
              {formik.errors.nombre}
              </Form.Control.Feedback>
            </Form.Group>
            </div>

            <div className="columna">
            <Form.Group className="mb-3" controlId="formApellido">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                name="apellido"
                type="text"
                value={formik.values.apellido || ''}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={Boolean(formik.errors.apellido && formik.touched.apellido)}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.apellido}
              </Form.Control.Feedback>
            </Form.Group>
            

            <Form.Group className="mb-3" controlId="formTelefono">
              <Form.Label>Telefono</Form.Label>
              <Form.Control
                name="telefono"
                type="text"
                value={formik.values.telefono || ''}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={Boolean(formik.errors.telefono && formik.touched.telefono)}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.telefono}
              </Form.Control.Feedback>
            </Form.Group>


            <Form.Group className="mb-3" controlId="formRepetirContrasena">
              <Form.Label>Repetir Contraseña</Form.Label>
              <Form.Control
                name="repetirContrasena"
                type="password"
                value={formik.values.repetirContrasena || ''}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={Boolean(formik.errors.repetirContrasena && formik.touched.repetirContrasena)}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.repetirContrasena}
              </Form.Control.Feedback>
            </Form.Group>


            <Form.Group className="mb-3" controlId="formDireccion">
              <Form.Label>Direccion</Form.Label>
              <Form.Control
                name="direccion"
                type="text"
                value={formik.values.direccion || ''}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={Boolean(formik.errors.direccion && formik.touched.direccion)}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.direccion}
              </Form.Control.Feedback>
            </Form.Group>


            <Form.Group className="mb-3" controlId="formDepartamento">
              <Form.Label>Departamento</Form.Label>
              <Form.Control
                name="departamento"
                type="text"
                value={formik.values.departamento || ''}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={Boolean(formik.errors.departamento && formik.touched.departamento)}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.departamento}
              </Form.Control.Feedback>
            </Form.Group>
            </div>



          </Form>
        </Modal.Body>

        <Modal.Footer id="contenedorBotonRegistrarse">
          <Button onClick={onHide} type="submit" disabled={!formik.isValid} id="botonRegistrarse">
            Registrarse
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalIngreso