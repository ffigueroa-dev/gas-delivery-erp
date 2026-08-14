import { PageHeader } from '@/components/page-header';
import deliveries, {
    create as createDelivery,
    store as storeDelivery,
} from '@/routes/deliveries';
import { Head, Link, useForm } from '@inertiajs/react';
import { SubmitEvent } from 'react';
import { DeliveryForm } from '../types/DeliveryForm';
import { TextField } from '@/components/form/text-field';
import { PasswordField } from '@/components/form/password-field';
import { Button } from '@/components/ui/button';

const Create = () => {
    const form = useForm<DeliveryForm>({
        name: '',
        email: '',
        password: '',
    });
    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        form.post(storeDelivery().url, {
            onError: (e) => console.log(e),
        });
    };
    return (
        <>
            <Head />
            <div className="p-6">
                <PageHeader
                    title="Deliveries"
                    description="Create a new delivery"
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
                    <PasswordField
                        id="delivery-password"
                        label="Password"
                        value={form.data.password}
                        error={form.errors.password}
                        onChange={(value) => form.setData('password', value)}
                    />
                    <div className="flex items-center justify-end gap-4">
                        <Button type="submit" disabled={form.processing}>
                            Create
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

Create.layout = {
    breadcrumbs: [
        {
            title: 'Create Delivery',
            href: createDelivery(),
        },
    ],
};

export default Create;
