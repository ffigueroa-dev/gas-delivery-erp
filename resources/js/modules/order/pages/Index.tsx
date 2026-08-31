import { Head, Link } from '@inertiajs/react';
import { Order } from '../types/Order';
import * as ordersRoute from '@/routes/orders';
import { PageHeader } from '@/components/page-header';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { OrderCard } from '../components/OrderCard';

type IndexPageProps = {
    orders: {
        data: Order[];
    };
};

const Index = ({ orders }: IndexPageProps) => {
    console.log(orders);

    return (
        <>
            <Head title="Orders" />
            <div className="p-6">
                <PageHeader title="Clients" description="Manage your clients">
                    <Button size={'icon'}>
                        <Link href={ordersRoute.create()}>
                        <Plus />
                        <span className="sr-only">Create Order</span>
                        </Link>
                    </Button>
                </PageHeader>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {orders.data.map((o) => (
                        <OrderCard order={o} key={o.id} />
                    ))}
                </div>
            </div>
        </>
    );
};

Index.layout = {
    breadcrumbs: [
        {
            title: 'Orders',
            href: ordersRoute.index(),
        },
    ],
};
export default Index;
