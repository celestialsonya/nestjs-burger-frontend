
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

export class JsonProduct {
    product_id: number
    quantity: number
}

export interface CartInterface {
    getCart(): JsonProduct[]
    addProduct(product: JsonProduct): void
    clearCart(): void
    getById(id: number): JsonProduct | undefined
    getActualQuantity(id: number): number
    removeProduct(id: number): void
}