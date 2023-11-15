import { Client } from "../types/Client";


const BASE_URL = '';

export const ClientService = {

    getClientes:async (): Promise<Client[]> => {
        const response = await fetch(`${BASE_URL}/clientes`);
        const data = await response.json();

        return data;
    },

    getCliente:async (usuario: string): Promise<Client> => {
        const response = await fetch(`${BASE_URL}/clientes/${usuario}`);
        const data = await response.json();
        
        return data;
    },

    createCliente:async (cliente:Client): Promise<Client> => {
        const response = await fetch(`${BASE_URL}/clientes`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cliente)
        });

        const data = await response.json();

        return data;
    },

    updateCliente:async (usuario:string, cliente:Client): Promise<Client> => {
        const response = await fetch(`${BASE_URL}/clientes/${usuario}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cliente)
        });

        const data = await response.json();

        return data;
    },

    deleteCliente:async (usuario:string): Promise<void> => {
        await fetch(`${BASE_URL}/clientes/${usuario}`, {
            method: "DELETE"
        });
    }


}