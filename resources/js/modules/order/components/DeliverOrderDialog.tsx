import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';

import { router } from '@inertiajs/react';

import { Order } from '../types/Order';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

import orders from '@/routes/orders';

type DeliverOrderDialogProps = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    order: Order;
};

export const DeliverOrderDialog = ({
    order,
    isOpen,
    setIsOpen,
}: DeliverOrderDialogProps) => {
    const handleDeliver = () => {
        router.patch(orders.deliver(order.id).url);
        setIsOpen(false);
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Mark Order as Delivered</DialogTitle>

                    <DialogDescription>
                        Are you sure you want to mark order{' '}
                        <span className="font-bold text-white">
                            {order.id}
                        </span>{' '}
                        as delivered?
                    </DialogDescription>
                </DialogHeader>

                <Alert>
                    <AlertTriangle />

                    <AlertDescription>
                        This action cannot be undone. Once the order is marked
                        as delivered, its status cannot be changed back.
                    </AlertDescription>
                </Alert>

                <DialogFooter>
                    <Button
                        variant="default"
                        onClick={handleDeliver}
                    >
                        Mark as delivered
                    </Button>

                    <Button
                        variant="secondary"
                        onClick={() => setIsOpen(false)}
                    >
                        Cancel
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
