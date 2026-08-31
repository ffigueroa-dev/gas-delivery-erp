import { SelectField } from '@/components/form/select-field';
import { Product } from '@/modules/product/types/Product';
import { SelectOption, UUID } from '@/types/common';
import { OrderProductFormItem } from '../types/OrderForm';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Trash } from 'lucide-react';

type OrderProductRowProps = {
    item: OrderProductFormItem;
    availableProducts: Product[];
    index: number;
    updateItem: (
        index: number,
        changes: Partial<OrderProductFormItem>
    ) => void;
    onRemove: (index: number) => void;
};
export const OrderProductRow = ({
    item,
    index,
    updateItem,
    onRemove,
    availableProducts,
}: OrderProductRowProps) => {
    const availableProductsOptions: SelectOption<UUID>[] =
        availableProducts.map((product) => ({
            label: product.name,
            value: product.id,
        }));

    return (
        <div className="flex items-end gap-3">
            <div className="min-w-0 flex-1">
                <SelectField
                    dropdown={availableProductsOptions}
                    id={`products.${index}.id`}
                    label="Product"
                    onChange={(id) => updateItem(index, { id })}
                    placeholder="Please select a product"
                    selectLabel="Available products"
                    value={item.id}
                />
            </div>

            <Input
                className="w-52 shrink-0"
                type="number"
                min={1}
                value={item.quantity}
                onChange={(e) =>
                    updateItem(index, {
                        quantity: Number(e.target.value),
                    })
                }
            />

            <Button
                type="button"
                size="icon"
                variant="destructive"
                className="shrink-0"
                onClick={() => onRemove(index)}
            >
                <Trash />
            </Button>
        </div>
    );
};
