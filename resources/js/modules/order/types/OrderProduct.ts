import type { UUID } from '@/types/common';
import type { Product } from '@/modules/product/types/Product';

export interface OrderProduct {
    id: UUID;
    product: Product;
    current_price: string;
    quantity: number;
    subtotal: string;
}
