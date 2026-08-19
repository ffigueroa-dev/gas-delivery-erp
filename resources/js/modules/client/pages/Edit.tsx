import clients from '@/routes/clients';
import { Client, ClientTypeOption } from '../types/Client';
import { Head, Link, useForm } from '@inertiajs/react';
import { PageHeader } from '@/components/page-header';
import { TextField } from '@/components/form/text-field';
import { UpdateClientForm } from '../types/ClientForm';
import { PhoneField } from '@/components/form/phone-field';
import { SelectField } from '@/components/form/select-field';
import { Button } from '@/components/ui/button';
import { SubmitEvent } from 'react';
import { SwitchField } from '@/components/form/switch-field';

type EditPageProps = {
    clientTypes: ClientTypeOption[];
    client: {
        data: Client;
    };
};

const Edit = ({ clientTypes, client }: EditPageProps) => {
    const form = useForm<UpdateClientForm>({
        name: client.data.name,
        phone: client.data.phone,
        full_address: client.data.full_address,
        address_reference: client.data.address_reference,
        type: client.data.type,
        active: client.data.active,
    });

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        form.patch(clients.update(client.data.id).url);
    };

    return (
        <>
            <Head title="Edit Client" />
            <div className="p-6">
                <PageHeader title="Edit Client" description="Edit client" />
                <form onSubmit={handleSubmit} className="space-y-6">
                    <TextField
                        id="client-name"
                        label="Client"
                        placeholder="Please enter client name"
                        onChange={(v) => form.setData('name', v)}
                        value={form.data.name}
                        error={form.errors.name}
                    />
                    <PhoneField
                        id="client-phone"
                        label="Phone Number"
                        placeholder="1234567890"
                        onChange={(v) => form.setData('phone', v)}
                        value={form.data.phone ?? ''}
                        error={form.errors.phone}
                    />
                    <TextField
                        id="client-address"
                        label="Address"
                        placeholder="Please enter full address"
                        onChange={(v) => form.setData('full_address', v)}
                        value={form.data.full_address}
                        error={form.errors.full_address}
                    />
                    <TextField
                        id="client-address-reference"
                        label="Address reference"
                        placeholder="Please enter address reference"
                        onChange={(v) => form.setData('address_reference', v)}
                        value={form.data.address_reference ?? ''}
                        error={form.errors.address_reference}
                    />

                    <SelectField
                        id="client-type"
                        dropdown={clientTypes}
                        label="Client type"
                        onChange={(v) => form.setData('type', v)}
                        placeholder="Select a type"
                        selectLabel="Types"
                        value={form.data.type}
                        error={form.errors.type}
                    />

                    <SwitchField
                        id="client-active"
                        label="Active client"
                        description="Inactive clients won't be available for new sales."
                        checked={form.data.active}
                        onChange={(checked) => form.setData('active', checked)}
                        error={form.errors.active}
                    />
                    <div className="flex items-center justify-end gap-4">
                        <Button type="submit" disabled={form.processing}>
                            Update
                        </Button>
                        <Button variant={'secondary'} asChild>
                            <Link href={clients.index()}>Cancel</Link>
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
            title: 'Edit Client',
        },
    ],
};

export default Edit;
