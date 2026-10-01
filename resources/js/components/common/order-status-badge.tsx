import { Badge } from '@/components/ui/badge';
import { OrderStatus, OrderStatusEnum } from '@/modules/order/types/Order';

type OrderStatusBadgeProps = {
    status: OrderStatus;
};

const statusConfig = {
    [OrderStatusEnum.PENDING]: {
        label: 'Pending',
        variant: 'secondary' as const,
    },
    [OrderStatusEnum.DELIVERED]: {
        label: 'Delivered',
        variant: 'default' as const,
    },
    [OrderStatusEnum.CANCELLED]: {
        label: 'Cancelled',
        variant: 'destructive' as const,
    },
};

export const OrderStatusBadge = ({ status }: OrderStatusBadgeProps) => {
    const config = statusConfig[status];

    return (
        <Badge variant={config.variant}>
            {config.label}
        </Badge>
    );
};



