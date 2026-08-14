import { Delivery } from "./Delivery";

export type DeliveryForm = Omit<Delivery, 'id' | 'role'> & {
    password: string;
}
