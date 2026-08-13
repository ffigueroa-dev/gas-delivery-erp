import { index as deliveriesRoute } from '@/routes/deliveries';
import { Delivery } from '../types/Delivery';
import { Head, Link } from '@inertiajs/react';
import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { DeliveryCard } from '../components/DeliveryCard';

interface IndexPageProps {
    deliveries: {
        data: Delivery[];
    };
}

const Index = ({ deliveries }: IndexPageProps) => {

    return (
        <>
            <Head title="Deliveries" />
            <div className="p-6">
                <PageHeader
                    title="Deliveries"
                    description="Manage your deliveries"
                >
                    <Button disabled size="icon">
                            <Plus />
                            <span className="sr-only">Create Delivery</span>
                    </Button>
                </PageHeader>

                <div className="flex flex-wrap items-center gap-4">
                    {deliveries.data.map((d) => (
                        <DeliveryCard delivery={d} key={d.id} />
                    ))}
                </div>
            </div>
        </>
    );
};

Index.layout = {
    breadcrumbs: [
        {
            title: 'Deliveries',
            href: deliveriesRoute(),
        },
    ],
};
export default Index;
