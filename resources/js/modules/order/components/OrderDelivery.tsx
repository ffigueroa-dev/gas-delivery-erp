import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import { Delivery } from '@/modules/delivery/types/Delivery';

type OrderDeliveryProps = {
    delivery: Delivery;
};

const OrderDelivery = ({ delivery }: OrderDeliveryProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Delivery</CardTitle>
            </CardHeader>

            <CardContent>
                <div className="space-y-3">
                    <div>
                        <p className="text-sm text-muted-foreground">
                            Name
                        </p>

                        <p className="font-medium">
                            {delivery.name}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-muted-foreground">
                            Email
                        </p>

                        <p>
                            {delivery.email}
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default OrderDelivery;
