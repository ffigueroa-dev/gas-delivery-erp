import { PageHeader } from '@/components/page-header';
import { index as clientsRoute } from '@/routes/clients';
import { Head } from '@inertiajs/react';
import { Client } from '../types/Client';
import { ClientCard } from '../components/ClientCard';

interface IndexPageProps {
    clients: {
        data: Client[];
    };
}

const Index = ({ clients }: IndexPageProps) => {
    return (
        <>
            <Head title="Clients" />
            <div className="p-6">
                <PageHeader
                    title="Clients"
                    description="Manage your clients"
                ></PageHeader>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {clients.data.map((c) => (
                        <ClientCard client={c} />
                    ))}
                </div>
            </div>
        </>
    );
};

Index.layout = {
    breadcrumbs: [
        {
            title: 'Clients',
            href: clientsRoute(),
        },
    ],
};

export default Index;
