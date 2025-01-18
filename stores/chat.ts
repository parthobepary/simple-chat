import type {Message, Client} from "~/interface/fake";

export const useChatStore = defineStore('chat', () => {
    const messages = ref<Message[]>([]);
    const {clients} = storeToRefs(useClientStore());
    const message = ref<string>('');
    const userId = ref<number>(1);

    const sendMessage = () => {
        if (message.value) {
            messages.value?.push(makeMessage(message.value, userId.value));
            message.value = '';
        }
    };

    const makeMessage = (message: string, userId: number): { client: Client; id: number; message: string } => {
        return {
            id: messages.value?.length ? messages.value.length + 1 : 1,
            message,
            client: clients.value?.find(client => client.id === userId) as Client
        }
    }


    return {messages, message, userId, sendMessage};
});