import { PageHeader } from '@/components/page-header';
import { Product } from '@/modules/product/types/Product';
import orders from '@/routes/orders';
import { Head, Link, useForm } from '@inertiajs/react';
import { SubmitEvent } from 'react';
import { UpdateOrderForm } from '../types/OrderForm';
import { SelectField } from '@/components/form/select-field';
import { SelectOption, UUID } from '@/types/common';
import { OrderProductField } from '../components/OrderProductField';
import { TextField } from '@/components/form/text-field';
import { Button } from '@/components/ui/button';
import { Order } from '../types/Order';

type EditPageProps = {
    products: {
        data: Product[];
    };
    dropdowns: {
        clients: SelectOption<UUID>[];
        deliveries: SelectOption<UUID>[];
    };
    order: {
        data: Order;
    };
};

const Edit = ({ products, dropdowns, order }: EditPageProps) => {
    const form = useForm<UpdateOrderForm>({
        client_id: order.data.client?.id || '',
        delivery_id: order.data.delivery.id,
        notes: order.data.notes || '',
        products: order.data.products.map((p) => ({
            id: p.product.id,
            quantity: p.quantity,
        })),
    });

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        form.patch(orders.update(order.data.id).url);
    };

    return (
        <>
            <Head title="Update Order" />
            <div className="p-6">
                <PageHeader
                    title="Update Order"
                    description="Update a new order"
                />
                <form onSubmit={handleSubmit} className="space-y-6">
                    <SelectField
                        dropdown={dropdowns.clients}
                        id="client-id"
                        label="Select client"
                        onChange={(v) => form.setData('client_id', v)}
                        placeholder="Please select a client"
                        selectLabel="clients"
                        value={form.data.client_id}
                        error={form.errors.client_id}
                    />
                    <SelectField
                        dropdown={dropdowns.deliveries}
                        id="delivery-id"
                        label="Select delivery"
                        onChange={(v) => form.setData('delivery_id', v)}
                        placeholder="Please select a delivery"
                        selectLabel="Deliveries"
                        value={form.data.delivery_id}
                        error={form.errors.delivery_id}
                    />
                    <TextField
                        id="notes"
                        label="Notes"
                        onChange={(v) => form.setData('notes', v)}
                        value={form.data.notes}
                        error={form.errors.notes}
                        placeholder="Please enter notes"
                    />
                    <OrderProductField
                        onChange={(v) => form.setData('products', v)}
                        products={products.data}
                        value={form.data.products}
                        errors={form.errors}
                    />
                    <div className="flex items-center justify-end gap-4">
                        <Button type="submit" disabled={form.processing}>
                            Update
                        </Button>
                        <Button variant={'secondary'} asChild>
                            <Link href={orders.index()}>Cancel</Link>
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
            title: 'Edit Order',
        },
    ],
};

export default Edit;
