import { Separator } from '@/components/ui/separator';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import { Order } from '../types/Order';
import { OrderStatusBadge } from '@/components/common/order-status-badge';


type OrderInformationProps = {
    order: Order;
};

const OrderInformation = ({ order }: OrderInformationProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Order information</CardTitle>
            </CardHeader>

            <CardContent>
                <div className="grid gap-6 md:grid-cols-3">
                    <div>
                        <p className="text-sm text-muted-foreground">
                            Status
                        </p>

                        <div className="mt-1">
                            <OrderStatusBadge status={order.status} />
                        </div>
                    </div>

                    <div>
                        <p className="text-sm text-muted-foreground">
                            Created
                        </p>

                        <p className="mt-1 font-medium">
                            {new Date(order.created_at).toLocaleString()}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-muted-foreground">
                            Last updated
                        </p>

                        <p className="mt-1 font-medium">
                            {new Date(order.updated_at).toLocaleString()}
                        </p>
                    </div>
                </div>

                {order.notes && (
                    <>
                        <Separator className="my-6" />

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Notes
                            </p>

                            <p className="mt-1">
                                {order.notes}
                            </p>
                        </div>
                    </>
                )}
            </CardContent>
        </Card>
    );
};

export default OrderInformation;
