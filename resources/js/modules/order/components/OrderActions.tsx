import { Button } from '@/components/ui/button';
import { PackageCheck, Pen, X } from 'lucide-react';
import { Order, OrderStatusEnum } from '../types/Order';
import orders from '@/routes/orders';
import { Link } from '@inertiajs/react';
import { useState } from 'react';
import { CancelOrderDialog } from './CancelOrderDialog';
import { DeliverOrderDialog } from './DeliverOrderDialog';

type OrderActionsProps = {
    order: {
        data: Order;
    };
};
export const OrderActions = ({ order }: OrderActionsProps) => {
    const [openCancelDialog, setOpenCancelDialog] = useState<boolean>(false);
    const [openDeliverDialog, setOpenDeliverDialog] = useState<boolean>(false);
    const isPending = order.data.status === OrderStatusEnum.PENDING;

    return (
        <section className="flex flex-wrap items-center justify-end gap-4">
            <Button
                disabled={!isPending}
                onClick={() => setOpenDeliverDialog(true)}
            >
                <PackageCheck />
                <span>Mark as delivered</span>
            </Button>
            <Button
                variant={'destructive'}
                disabled={!isPending}
                onClick={() => setOpenCancelDialog(true)}
            >
                <X />
                <span>Mark as cancelled</span>
            </Button>
            <Button asChild variant="secondary">
                {isPending ? (
                    <Link href={orders.edit(order.data.id)}>
                        <Pen />
                        <span>Edit Order</span>
                    </Link>
                ) : (
                    <Button disabled={!isPending}>
                        <Pen />
                        <span>Edit Order</span>
                    </Button>
                )}
            </Button>
            <CancelOrderDialog
                isOpen={openCancelDialog}
                order={order.data}
                setIsOpen={setOpenCancelDialog}
            />
            <DeliverOrderDialog
                isOpen={openDeliverDialog}
                order={order.data}
                setIsOpen={setOpenDeliverDialog}
            />
        </section>
    );
};
