import { UUID } from "@/types/common"
import { ProductPrice } from "./ProductPrice";

export interface Product {
    id: UUID;
    name: string;
    description: string;
    active: boolean;
    prices: ProductPrice[];
}
