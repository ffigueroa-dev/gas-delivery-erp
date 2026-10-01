import { PageHeader } from '@/components/page-header';
import { Head } from '@inertiajs/react';

import OrderClient from '../components/OrderClient';
import OrderDelivery from '../components/OrderDelivery';
import OrderInformation from '../components/OrderInformation';
import OrderProducts from '../components/OrderProducts';
import { Order } from '../types/Order';
import { OrderActions } from '../components/OrderActions';

type DetailPageProps = {
    order: {
        data: Order;
    };
};

const Detail = ({ order }: DetailPageProps) => {
    const data = order.data;

    return (
        <>
            <Head title="Order detail" />

            <div className="space-y-6 p-6">
                <PageHeader
                    title="Order Detail"
                    description={`Order ${data.id}`}
                />

                <OrderInformation order={data} />

                <div className="grid gap-6 md:grid-cols-2">
                    <OrderClient client={data.client} />
                    <OrderDelivery delivery={data.delivery} />
                </div>

                <OrderProducts
                    products={data.products}
                    totalAmount={data.total_amount}
                />

                <OrderActions order={order} />
            </div>
        </>
    );
};

Detail.layout = {
    breadcrumbs: [
        {
            title: 'Order detail',
        },
    ],
};

export default Detail;
