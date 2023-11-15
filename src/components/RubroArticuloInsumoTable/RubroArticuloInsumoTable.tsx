import { useEffect, useState } from "react";
import { RubroArticuloInsumo } from "../../types/RubroArticuloInsumo";
import { RubroArticuloInsumoService } from "../../services/RubroArticuloInsumoService";
import { Button, Table } from "react-bootstrap";
import Loader from "../Loader/Loader";
import { ModalType } from "../../types/ModalType";
import RubroArticuloInsumoModal from "../RubroArticuloInsumoModal/RubroArticuloInsumoModal";
import { EditButton } from "../EditButton/EditButton";
import { DeleteButton } from "../DeleteButton.tsx/DeleteButton";

const RubroArticuloInsumoTable =()=>{

    //VARIABLE QUE CONTIENE DATOS RECIBIDOS POR LA API
    const[rubroArticuloInsumos, setRubroArticuloInsumos] =useState<RubroArticuloInsumo[]>([]);

    //VARIABLE QUE MUESTRA EL LOADER HASTA QUE SE RECIBAN DATOS DE LA API
    const [isLoading, setIsLoading] = useState(true);

    //ACTUALIZA LA TABLA DESPUES DE CADA OPERACION EXITOSA
    const [refreshData, setRefreshData] = useState(false);

    //HOOK QUE SE EJECUTA CADA VEZ QUE SE RENDERIZA EL COMPONENTE O REFRESH DATA CAMBIE DE ESTADO
    useEffect(()=>{
        //LLAMAMOS A LA FUNCION PARA OBTENER LOS PRODUCTOS DECLARADOS POR EL PRODUCT SERVICE
        const fetchRubroArticuloInsumos = async()=>{
            const rubroArticuloInsumos = await RubroArticuloInsumoService.getRubroArticuloInsumos(); 
            setRubroArticuloInsumos(rubroArticuloInsumos);
            setIsLoading(false);
        };

        fetchRubroArticuloInsumos(); 
    },[refreshData]);

    //TEST, LOG MODIFICADO PARA QUE MUESTRE LOS DATOS MAS LEGIBLE
    console.log(JSON.stringify(rubroArticuloInsumos,null,2));
    //STRINGIFY ES CONVERTIR OBJETO JAVASCRIPT EN CADENA JSON

    //CONST PARA INICIALIZAR UN PRODUCTO POR DEFECTO Y EVITAR EL "undefined"

        const initializableNewRubroArticuloInsumo = (): RubroArticuloInsumo=>{
            return {
                id:0,
                denominacion:"",
            };
        };


        //PRODUCTO SELECCIONADO QUE SE VA A PASAR COMO PROP AL MODAL
        const [rubroArticuloInsumo, setRubroArticuloInsumo] = useState<RubroArticuloInsumo>(initializableNewRubroArticuloInsumo);

        //CONST PAR MANEJAR ESTADO DEL MODAL
        const [showModal, setShowModal] = useState(false);
        const [modalType, setModalType] = useState<ModalType>(ModalType.NONE);
        const [title,setTitle]=useState("");

        //LOGICA DEL MODAL
        const handleClick = (newTitle:string, rub:RubroArticuloInsumo,modal: ModalType)=>{
            setTitle(newTitle);
            setModalType(modal);
            setRubroArticuloInsumo(rub);
            setShowModal(true);
        };

    return (
        <>
        <Button onClick={()=> handleClick("Nuevo Rubro Insumo", initializableNewRubroArticuloInsumo(),
        ModalType.CREATE)}> Nuevo Rubro Insumo </Button>
            {isLoading ? <Loader/> :(
                <Table hover>
                    <thead>
                        <tr>
                            <th>Denominacion</th>
                            <th>Editar</th>
                            <th>Borrar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rubroArticuloInsumos.map( rubroArticuloInsumo => (
                            <tr key={rubroArticuloInsumo.id}>
                                <td>{rubroArticuloInsumo.denominacion}</td>
                                <td><EditButton onClick={()=> handleClick("Editar rubro", rubroArticuloInsumo, ModalType.UPDATE)}/></td>
                                <td><DeleteButton onClick={()=> handleClick("Borrar rubro", rubroArticuloInsumo, ModalType.DELETE)}/></td>
                            </tr>
                        )

                        )

                        }
                    </tbody>
                </Table>
            )}

            {showModal && (
                <RubroArticuloInsumoModal
                show={showModal}
                onHide={()=>setShowModal(false)}
                title={title}
                modalType={modalType}
                rub={rubroArticuloInsumo}
                refreshData={setRefreshData}
                />
            )

            }
        </>
    )
}


export default RubroArticuloInsumoTable