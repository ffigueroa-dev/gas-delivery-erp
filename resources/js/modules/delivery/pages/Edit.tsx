import { Head, Link, useForm } from '@inertiajs/react';
import { Delivery } from '../types/Delivery';
import { UpdateDeliveryForm } from '../types/DeliveryForm';
import { SubmitEvent } from 'react';
import deliveries, { update as updateDeliveryRoute } from '@/routes/deliveries';
import { PageHeader } from '@/components/page-header';
import { TextField } from '@/components/form/text-field';
import { Button } from '@/components/ui/button';

type EditPageProps = {
    delivery: {
        data: Delivery;
    };
};
const Edit = ({ delivery }: EditPageProps) => {
    const form = useForm<UpdateDeliveryForm>({
        name: delivery.data.name,
        email: delivery.data.email,
    });
    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        form.patch(updateDeliveryRoute(delivery.data.id).url);
    };

    return (
        <>
            <Head />
            <div className="p-6">
                <PageHeader
                    title="Deliveries"
                    description="Update delivery"
                />
                <form onSubmit={handleSubmit} className="space-y-6">
                    <TextField
                        id="delivery-name"
                        label="Name"
                        value={form.data.name}
                        error={form.errors.name}
                        placeholder="Please enter delivery name"
                        onChange={(v) => form.setData('name', v)}
                    />
                    <TextField
                        id="delivery-email"
                        label="Email"
                        value={form.data.email}
                        error={form.errors.email}
                        placeholder="Please enter delivery email"
                        onChange={(v) => form.setData('email', v)}
                    />

                    <div className="flex items-center justify-end gap-4">
                        <Button type="submit" disabled={form.processing}>
                            Update
                        </Button>
                        <Button variant={'secondary'} asChild>
                            <Link href={deliveries.index()}>Cancel</Link>
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
            title: 'Edit delivery',
        },
    ],
};

export default Edit;
