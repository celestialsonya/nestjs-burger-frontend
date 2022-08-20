
export type Product = {
    id: number
    name: string
    description: string
    price: number
    category: string
}

export class User {
    id?: number;
    username: string;
    phone_number: string;
    role: Role
}

export enum Role {
    USER = "user",
    ADMIN = "admin",
    WORKER = "worker"
}