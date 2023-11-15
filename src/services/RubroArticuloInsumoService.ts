import { RubroArticuloInsumo } from "../types/RubroArticuloInsumo";

const BASE_URL = 'http://localhost:8080';

export const RubroArticuloInsumoService = {

    getRubroArticuloInsumos: async () : Promise <RubroArticuloInsumo[]>=> {
    
    const response = await fetch(`${BASE_URL}/api/v1/rubroArticuloInsumo`);
    const data = await response.json();
    return data;
    
    },

    getRubroArticuloInsumo: async (id: number): Promise<RubroArticuloInsumo> => {

        const response = await fetch(`${BASE_URL}/api/v1/rubroArticuloInsumo/${id}`);
        const data = await response.json();
        return data;
    },

    creaateRubroArticuloInsumo: async (rubroArticuloInsumo: RubroArticuloInsumo): Promise<RubroArticuloInsumo>=> {
        const response = await fetch( `${BASE_URL}/api/v1/rubroArticuloInsumo`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(rubroArticuloInsumo)
        });

        const data = await response.json();
        return data;

    },

    updateRubroArticuloInsumo: async (id:number,rubroArticuloInsumo:RubroArticuloInsumo):Promise<RubroArticuloInsumo>=>{
        const response = await fetch( `${BASE_URL}/api/v1/rubroArticuloInsumo/${id}`,{
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(rubroArticuloInsumo)
        });

        const data = await response.json();
        return data;

    },

    deleteRubroArticuloInsumo: async (id:number):Promise<void>=>{
        await fetch( `${BASE_URL}/api/v1/rubroArticuloInsumo/${id}`,{
            method: "DELETE",
      
    });
    }    

}