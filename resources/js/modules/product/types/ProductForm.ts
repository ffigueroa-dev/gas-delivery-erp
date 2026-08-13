import { ProductPrice } from "./ProductPrice";
import { Product } from "./Product";

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
