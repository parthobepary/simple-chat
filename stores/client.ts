import type {Client} from "~/interface/fake";

export const useClientStore = defineStore('client', () => {
    const clients = ref<Client[] | undefined>([
        {
            id: 1,
            name: "Me",
            role: "Admin"
        }
    ]);
    const name = ref<string>('');
    const roles = ref<string[]>([
        'Admin',
        'User',
        'Guest'
    ]);
    const role = ref<string>(roles.value[0]);

    const createClient = () => {
        clients.value?.push(makeClient(name.value, role.value));
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