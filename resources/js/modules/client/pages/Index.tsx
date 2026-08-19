import { PageHeader } from '@/components/page-header';
import {
    index as clientsRoute,
    create as createDeliveryRoute,
} from '@/routes/clients';
import { Head, Link } from '@inertiajs/react';
import { Client } from '../types/Client';
import { ClientCard } from '../components/ClientCard';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

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
                <PageHeader title="Clients" description="Manage your clients">
                    <Button asChild size={'icon'}>
                        <Link href={createDeliveryRoute()}>
                            <Plus />
                            <span className="sr-only">Create Client</span>
                        </Link>
                    </Button>
                </PageHeader>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {clients.data.map((c) => (
                        <ClientCard client={c} key={c.id}/>
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
