import { Button, Form, FormLabel, Modal } from "react-bootstrap";
import { ModalType } from "../../types/ModalType";
import { RubroArticuloInsumo } from "../../types/RubroArticuloInsumo";
import * as Yup from 'yup';
import {useFormik} from "formik";
import { RubroArticuloInsumoService } from "../../services/RubroArticuloInsumoService";
import { toast } from "react-toastify";

type RubroArticuloInsumoModalProps = {
    show: boolean;
    onHide: () => void;
    title: string;
    modalType: ModalType;
    rub: RubroArticuloInsumo;
    refreshData: React.Dispatch<React.SetStateAction<boolean>>;
}

const RubroArticuloInsumoModal = ({show,onHide,title,modalType,rub,refreshData}: RubroArticuloInsumoModalProps) =>{
    
    //CREATE - UPDATE
    const handleSaveUpdate = async (rub: RubroArticuloInsumo) =>{
        try {
            const isNew =rub.id ===0;
            if(isNew){
                await RubroArticuloInsumoService.creaateRubroArticuloInsumo(rub);
            } else {
                await RubroArticuloInsumoService.updateRubroArticuloInsumo(rub.id,rub);
            }
            toast.success(isNew ? "Rubro creado" : "Rubro actualizado", {
                position: "top-center",
            });
            onHide();
            refreshData(prevState=> !prevState);
        } catch (error) {
            console.error(error);
            toast.error("Ocurrio un error");
        }
    };

    //DELETE
    const handleDelete = async () => {
        try {
            await RubroArticuloInsumoService.deleteRubroArticuloInsumo(rub.id);
            toast.success("Se elimino con exito",{
                position : "top-center",
            });
            
            onHide();
            refreshData(prevState=> !prevState);

        } catch (error) {
            console.error(error);
            toast.error("Ocurrio un error");
        };
    }

    //YUP ESQUEMA VALIDACION
    const validationSchema = ()=> {
        return Yup.object().shape({
            id: Yup.number().integer().min(0),
            denominacion: Yup.string().required('Se requiere el nombre del rubro'),
        });
    };

    //FORMIK UTILIZA ESTO PARA CREAR UN FORMULARIO DINAMICO Y QUE LO BLOQUEE EN CASO DE HABER ERRORES
    const formik = useFormik({
        initialValues: rub,
        validationSchema: validationSchema(),
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (obj: RubroArticuloInsumo) => handleSaveUpdate(obj), 
    });

    return (
        <>
            {modalType=== ModalType.DELETE ?(
                <>
                    <Modal show={show} onHide={onHide} centered backdrop="static">
                        <Modal.Header>
                            <Modal.Title>{title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>¿Está seguro de la irreversibilidad de sus actos de borrar <br />
                            <strong>{rub.denominacion}</strong>? </p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={onHide}>Cancelar</Button>
                            <Button variant="danger" onClick={handleDelete}>Eliminar</Button>
                        </Modal.Footer>
                    </Modal>
                </>
            ) : (
                <>
                    <Modal show ={show} onHide={onHide} centered backdrop="static" className="modal-xl">
                        <Modal.Header closeButton>
                            <Modal.Title>{title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                           <Form onSubmit={formik.handleSubmit}>
                                <Form.Group>
                                    <FormLabel> Denominacion </FormLabel>
                                    <Form.Control 
                                        name= "denominacion"
                                        type= "text"
                                        value={formik.values.denominacion}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={Boolean(formik.errors.denominacion && formik.touched.denominacion)}
                                    />
                                    <Form.Control.Feedback type= "invalid">
                                            {formik.errors.denominacion}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Modal.Footer className="mt-4">
                                        <Button variant="secondary" onClick={onHide}>Cancelar</Button>
                                        <Button variant="primary" type="submit" disabled={!formik.isValid}>Guardar</Button>
                                </Modal.Footer>
                           </Form>
                        </Modal.Body>
                    </Modal>
                </>
            )}
        </>
    )
}

export default RubroArticuloInsumoModal