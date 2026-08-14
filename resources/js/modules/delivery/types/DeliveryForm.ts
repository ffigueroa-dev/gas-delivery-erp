import { Delivery } from "./Delivery";

export type DeliveryForm = Omit<Delivery, 'id' | 'role'> & {
    password: string;
}

export type UpdateDeliveryForm =
    Omit<Delivery, 'id' | 'role'>;
