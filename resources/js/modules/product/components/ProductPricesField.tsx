import InputError from "@/components/input-error";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import type { ProductPriceForm } from "../types/ProductForm";
import type { PriceType } from "../types/ProductPrice";

type PriceTypeOption = {
    value: PriceType;
    label: string;
};

type ProductPricesFieldProps = {
    options: PriceTypeOption[];
    prices: ProductPriceForm[];
    errors: Record<string, string>;
    onChange: (prices: ProductPriceForm[]) => void;
};

export const ProductPricesField = ({
    options,
    prices,
    errors,
    onChange,
}: ProductPricesFieldProps) => {
    const hasPriceType = (type: PriceType) => {
        return prices.some((price) => price.type === type);
    };

    const togglePriceType = (type: PriceType) => {
        const exists = hasPriceType(type);

        if (exists) {
            if (prices.length === 1) {
                return;
            }

            onChange(
                prices.filter((price) => price.type !== type),
            );

            return;
        }

        onChange([
            ...prices,
            {
                type,
                amount: "",
            },
        ]);
    };

    const setPriceAmount = (
        type: PriceType,
        amount: string,
    ) => {
        onChange(
            prices.map((price) =>
                price.type === type
                    ? {
                          ...price,
                          amount,
                      }
                    : price,
            ),
        );
    };

    return (
        <div className="space-y-4">
            <div>
                <h3 className="font-medium">
                    Prices
                </h3>

                <p className="text-sm text-muted-foreground">
                    Select at least one price type.
                </p>
            </div>

            {options.map((priceType) => {
                const selected = hasPriceType(
                    priceType.value,
                );

                const priceIndex = prices.findIndex(
                    (price) =>
                        price.type === priceType.value,
                );

                const amountError =
                    priceIndex >= 0
                        ? errors[
                              `prices.${priceIndex}.amount`
                          ]
                        : undefined;

                return (
                    <div
                        key={priceType.value}
                        className="space-y-3"
                    >
                        <div className="flex items-center gap-2">
                            <Checkbox
                                id={`price-type-${priceType.value}`}
                                checked={selected}
                                disabled={
                                    selected &&
                                    prices.length === 1
                                }
                                onCheckedChange={() =>
                                    togglePriceType(
                                        priceType.value,
                                    )
                                }
                            />

                            <FieldLabel
                                htmlFor={`price-type-${priceType.value}`}
                            >
                                {priceType.label}
                            </FieldLabel>
                        </div>

                        {selected && (
                            <Field>
                                <FieldLabel
                                    htmlFor={`price-${priceType.value}`}
                                >
                                    {priceType.label} Price
                                </FieldLabel>

                                <Input
                                    id={`price-${priceType.value}`}
                                    type="number"
                                    min="0"
                                    value={
                                        prices[priceIndex]
                                            .amount
                                    }
                                    onChange={(e) =>
                                        setPriceAmount(
                                            priceType.value,
                                            e.target.value,
                                        )
                                    }
                                    placeholder={`Enter ${priceType.label.toLowerCase()} price`}
                                    aria-invalid={
                                        !!amountError
                                    }
                                />

                                <InputError
                                    message={amountError}
                                />
                            </Field>
                        )}
                    </div>
                );
            })}

            <InputError message={errors.prices} />
        </div>
    );
};
