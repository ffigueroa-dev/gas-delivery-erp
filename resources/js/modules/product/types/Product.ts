import type { UUID } from "@/types/common"
import type { ProductPrice } from "./ProductPrice";

export interface Product {
    id: UUID;
    name: string;
    description: string;
    active: boolean;
    prices: ProductPrice[];
}
