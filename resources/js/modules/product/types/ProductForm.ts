import type { Product } from "./Product";
import type { ProductPrice } from "./ProductPrice";

export type ProductPriceForm = Omit<ProductPrice, 'id' | 'amount'> & {
    amount: string | number;
};

export type ProductForm =
    Omit<Product, 'id' | 'active' | 'prices'> & {
        prices: ProductPriceForm[];
    };
export type UpdateProductForm =
    Omit<Product, 'id' | 'prices'> & {
        prices: ProductPriceForm[]
    }
