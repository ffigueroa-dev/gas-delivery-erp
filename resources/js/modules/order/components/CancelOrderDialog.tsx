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
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import orders from '@/routes/orders';

type CancelOrderDialogProps = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    order: Order;
};
export const CancelOrderDialog = ({
    order,
    isOpen,
    setIsOpen,
}: CancelOrderDialogProps) => {
    const handleCancel = () => {
        router.patch(orders.cancel(order.id).url);
        setIsOpen(false);
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Cancel Order</DialogTitle>
                    <DialogDescription>
                        Cancel Order:{' '}
                        <span className="font-bold text-white">{order.id}</span>
                    </DialogDescription>
                </DialogHeader>
                <Alert>
                    <AlertTriangle />

                    <AlertDescription>
                        The order will be cancelled. Make sure you want to
                        continue.
                    </AlertDescription>
                </Alert>
                <DialogFooter>
                    <Button variant={'destructive'} onClick={handleCancel}>
                        Continue
                    </Button>
                    <Button
                        variant={'secondary'}
                        onClick={() => setIsOpen(false)}
                    >
                        Cancel
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
