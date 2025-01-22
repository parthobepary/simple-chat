import type {Client} from "~/interface/fake";
import {getData, setData} from "~/composables/useFetch";

export const useClientStore = defineStore('client', async () => {
    const clients = ref<Client[] | undefined>([getData('clients') as Client]);
    const name = ref<string>('');
    const roles = ref<string[]>([
        'Admin',
        'User',
        'Guest'
    ]);
    const role = ref<string>(roles.value[0]);

    const createClient = () => {
        clients.value?.push(makeClient(name.value, role.value));
        setData('clients', JSON.stringify(clients.value));
        name.value = '';
    }

    const deleteClient = (id: number) => {
        clients.value = clients.value?.filter(client => client.id !== id);
    }


    const makeClient = (name: string, role: string): Client => {
        return {
            id: clients.value?.length ? clients.value.length + 1 : 1,
            name,
            role
        }
    }


    return {name, role, clients, roles, createClient, deleteClient};
});