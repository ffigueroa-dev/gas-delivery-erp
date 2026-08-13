import type { UUID } from '@/types/common';

export type DeliveryRole = 'delivery';

export interface Delivery {
    id: UUID;
    name: string;
    email: string;
    role: DeliveryRole;
}
