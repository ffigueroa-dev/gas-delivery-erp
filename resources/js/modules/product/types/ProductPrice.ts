import { UUID } from "@/types/common";

export type PriceType = 'retail' | 'commercial';

export interface ProductPrice {
    id: UUID;
    type: PriceType;
    amount: number;
}

export type PriceTypeOption = {
    value: PriceType;
    label: string;
};
