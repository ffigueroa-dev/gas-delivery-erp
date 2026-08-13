import { Head, Link, useForm } from '@inertiajs/react';
import type { SubmitEvent } from 'react';
import { TextField } from '@/components/form/text-field';
import InputError from '@/components/input-error';
import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Field, FieldLabel } from '@/components/ui/field';
import { Switch } from '@/components/ui/switch';
import { products } from '@/routes';
import { update as updateProduct } from '@/routes/products';
import { ProductPricesField } from '../components/ProductPricesField';
import type { Product } from '../types/Product';
import type { UpdateProductForm, ProductPriceForm } from '../types/ProductForm';
import type { PriceTypeOption } from '../types/ProductPrice';

type EditPageProps = {
    product: {
        data: Product;
    };
    priceTypes: PriceTypeOption[];
};

const Edit = ({ product, priceTypes }: EditPageProps) => {
    const productData = product.data;

    const prices: ProductPriceForm[] = productData.prices.map((price) => ({
        type: price.type,
        amount: String(price.amount),
    }));

    const form = useForm<UpdateProductForm>({
        name: productData.name,
        description: productData.description,
        active: productData.active,
        prices,
    });

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        form.patch(updateProduct(product.data.id).url);
    };

    return (
        <>
            <Head title="Edit Product" />

            <div className="p-6">
                <PageHeader
                    title="Edit Product"
                    description="Create a new product"
                />

                <form onSubmit={handleSubmit} className="space-y-6">
                    <TextField
                        id="product-name"
                        label="Product Name"
                        value={form.data.name}
                        error={form.errors.name}
                        placeholder="Please enter product name"
                        onChange={(value) => form.setData('name', value)}
                    />

                    <TextField
                        id="product-description"
                        label="Description"
                        value={form.data.description}
                        error={form.errors.description}
                        placeholder="Please enter product description"
                        onChange={(value) => form.setData('description', value)}
                    />
                    <Field>
                        <div className="flex items-center justify-between gap-4 rounded-lg border p-4">
                            <div className="space-y-1">
                                <FieldLabel htmlFor="product-active">
                                    Active product
                                </FieldLabel>

                                <p className="text-sm text-muted-foreground">
                                    Inactive products won't be available for new
                                    sales.
                                </p>
                            </div>

                            <Switch
                                id="product-active"
                                checked={form.data.active}
                                onCheckedChange={(checked) =>
                                    form.setData('active', checked)
                                }
                            />
                        </div>

                        <InputError message={form.errors.active} />
                    </Field>
                    <ProductPricesField
                        options={priceTypes}
                        prices={form.data.prices}
                        errors={form.errors}
                        onChange={(prices) => form.setData('prices', prices)}
                    />
                    <div className="flex items-center justify-end gap-4">
                        <Button type="submit" disabled={form.processing}>
                            Update Product
                        </Button>

                        <Button variant={'secondary'} asChild>
                            <Link href={products().url}>Cancel</Link>
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
};

Edit.layout = {
    breadcrumbs: [
        {
            title: 'Edit Product',
        },
    ],
};

export default Edit;
