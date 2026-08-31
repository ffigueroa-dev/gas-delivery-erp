import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Product } from '@/modules/product/types/Product';
import { SelectOption, UUID } from '@/types/common';
import { Check } from 'lucide-react';
import { useState } from 'react';

import { SelectField } from '@/components/form/select-field';
import { OrderProductFormItem } from '../types/OrderForm';
import { OrderProductRow } from './OrderProductRow';


type OrderProductsFieldProps = {
    products: Product[];
    value: OrderProductFormItem[];
    onChange: (products: OrderProductFormItem[]) => void;
    errors?: Record<string, string>;
};

export const OrderProductField = ({
    onChange,
    products,
    value,
    errors,
}: OrderProductsFieldProps) => {
    const [newProductId, setNewProductId] = useState<UUID>('');
    const [newQuantity, setNewQuantity] = useState<number | ''>('');

    const selectedProductIds = value.map((item) => item.id);

    const availableProducts = products.filter(
        (product) => !selectedProductIds.includes(product.id),
    );

    const availableProductOptions: SelectOption<UUID>[] = availableProducts.map(
        (product) => ({
            value: product.id,
            label: product.name,
        }),
    );

    const canAdd = newProductId !== '' && newQuantity !== '' && newQuantity > 0;

    const handleAdd = () => {
        if (!canAdd) return;

        onChange([
            ...value,
            {
                id: newProductId,
                quantity: newQuantity,
            },
        ]);

        setNewProductId('');
        setNewQuantity('');
    };

    const updateItem = (
        index: number,
        changes: Partial<OrderProductFormItem>,
    ) => {
        const updated = value.map((item, currentIndex) =>
            currentIndex === index ? { ...item, ...changes } : item,
        );

        onChange(updated);
    };

    const removeItem = (index: number) => {
        onChange(value.filter((_, currentIndex) => currentIndex !== index));
    };

    const getAvailableProductsForRow = (currentProductId: UUID) => {
        return products.filter(
            (product) =>
                product.id === currentProductId ||
                !selectedProductIds.includes(product.id),
        );
    };

    return (
        <div className="space-y-4">
            {value.map((item, index) => (
                <OrderProductRow
                    key={`${item.id}-${index}`}
                    item={item}
                    index={index}
                    availableProducts={getAvailableProductsForRow(item.id)}
                    updateItem={updateItem}
                    onRemove={removeItem}
                />
            ))}

            {availableProducts.length > 0 && (
                <div className="flex items-end gap-3">
                    <div className="flex-1">
                        <SelectField
                            id="new-product"
                            label="Product"
                            selectLabel="Available products"
                            placeholder="Please select a product"
                            value={newProductId}
                            dropdown={availableProductOptions}
                            onChange={setNewProductId}
                        />
                    </div>

                    <div>
                        <Input
                            type="number"
                            min={1}
                            placeholder="Quantity"
                            value={newQuantity}
                            onChange={(e) => {
                                const value = e.target.value;

                                setNewQuantity(
                                    value === '' ? '' : Number(value),
                                );
                            }}
                        />
                    </div>

                    <Button
                        type="button"
                        size="icon"
                        disabled={!canAdd}
                        onClick={handleAdd}
                    >
                        <Check />
                    </Button>
                </div>
            )}
        </div>
    );
};
