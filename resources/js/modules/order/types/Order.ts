import type { UUID } from '@/types/common';
import type { Client } from '@/modules/client/types/Client';
import type { Delivery } from '@/modules/delivery/types/Delivery';
import type { OrderProduct } from './OrderProduct';

export type OrderStatus =
    | 'pending'
    | 'delivered'
    | 'cancelled';

export interface Order {
    id: UUID;
    client: Client | null;
    delivery: Delivery;
    status: OrderStatus;
    notes: string | null;
    total_amount: string;
    products: OrderProduct[];
    created_at: string;
    updated_at: string;
}
