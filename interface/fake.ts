export interface Client {
    id: number;
    name: string;
    role: string;
}

export interface PageData {
    title: string;
    description: string;
    url?: string;
    content?: string;
}

export interface NavData {
    title: string;
    link: string;
    icon: string;
}

export interface Message {
    id: number;
    message: string;
    client: Client | undefined;
}