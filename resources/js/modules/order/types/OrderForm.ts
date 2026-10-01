import { UUID } from "@/types/common";

export type OrderProductFormItem = {
    id: UUID;
    quantity: number;
};

export type CreateOrderForm = {
    client_id: UUID;
    delivery_id: UUID;
    notes: string;
    products: OrderProductFormItem[];
};

export type UpdateOrderForm = {
    client_id: UUID;
    delivery_id: UUID;
    notes: string;
    products: OrderProductFormItem[];
};

