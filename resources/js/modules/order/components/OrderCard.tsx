import { TruncatedText } from '@/components/common/truncated-text';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Package, Pen, Truck, User, X } from 'lucide-react';

import { OrderStatusEnum, type Order } from '../types/Order';
import { useState } from 'react';
import { CancelOrderDialog } from './CancelOrderDialog';

interface OrderCardProps {
    order: Order;
}

const statusVariant = {
    pending: 'secondary',
    delivered: 'default',
    cancelled: 'destructive',
} as const;

export const OrderCard = ({ order }: OrderCardProps) => {
    const [openCancelDialog, setOpenCancelDialog] = useState<boolean>(false);
    const canCancel = order.status === OrderStatusEnum.PENDING;
    return (
        <Card className="w-full max-w-sm transition-shadow hover:shadow-md">
            <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-3">
                <div className="min-w-0 flex-1">
                    <CardTitle className="text-base">Order</CardTitle>

                    <TruncatedText
                        text={order.id}
                        className="mt-1 text-xs text-muted-foreground"
                    />
                </div>

                <Badge
                    variant={statusVariant[order.status]}
                    className="ml-3 shrink-0 capitalize"
                >
                    {order.status}
                </Badge>
            </CardHeader>

            <CardContent className="flex flex-1 flex-col">
                <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                        <User className="size-4 shrink-0 text-muted-foreground" />

                        <div className="min-w-0 flex-1">
                            <span className="text-xs text-muted-foreground">
                                Client
                            </span>

                            <TruncatedText
                                text={order.client?.name ?? 'Street sale'}
                                className="font-medium"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                        <Truck className="size-4 shrink-0 text-muted-foreground" />

                        <div className="min-w-0 flex-1">
                            <span className="text-xs text-muted-foreground">
                                Delivery
                            </span>

                            <TruncatedText
                                text={order.delivery.name}
                                className="font-medium"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                        <Package className="size-4 shrink-0 text-muted-foreground" />

                        <div className="flex min-w-0 flex-1 items-center justify-between gap-3">
                            <span className="text-muted-foreground">
                                Products
                            </span>

                            <span className="shrink-0 font-medium">
                                {order.products.length}
                            </span>
                        </div>
                    </div>

                    {order.notes && (
                        <div className="text-sm">
                            <span className="text-muted-foreground">
                                Notes:{' '}
                            </span>

                            <TruncatedText
                                text={order.notes}
                                className="inline-block max-w-full align-bottom"
                            />
                        </div>
                    )}
                </div>

                <div className="mt-auto flex items-center justify-between border-t pt-3 text-sm">
                    <span className="text-muted-foreground">Total</span>

                    <span className="text-base font-semibold">
                        {order.total_amount}
                    </span>
                </div>
            </CardContent>

            <CardFooter className="mt-auto flex items-center justify-between">
                <Button variant="secondary">
                    <Pen />
                    <span>Edit</span>
                </Button>

                <Button
                    variant="destructive"
                    onClick={() => setOpenCancelDialog(true)}
                    disabled={!canCancel}
                >
                    <X />
                    <span>Cancel</span>
                </Button>
            </CardFooter>
            <CancelOrderDialog
                isOpen={openCancelDialog}
                order={order}
                setIsOpen={setOpenCancelDialog}
            />
        </Card>
    );
};
