import { router } from '@inertiajs/react';
import { AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Delivery } from '../types/Delivery';
import { deleteMethod } from '@/routes/deliveries';

type DeleteDeliveryDialogProps = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    delivery: Delivery;
};

export const DeleteDeliveryDialog = ({
    isOpen,
    setIsOpen,
    delivery,
}: DeleteDeliveryDialogProps) => {
    const handleDelete = async () => {
        router.delete(deleteMethod({ id: delivery.id }).url, {
            onSuccess: (d) => console.log(d),
        });
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete Delivery</DialogTitle>
                    <DialogDescription>
                        Delete Delivery:{' '}
                        <span className="font-bold text-white">
                            {delivery.name}
                        </span>
                    </DialogDescription>
                </DialogHeader>
                <Alert variant="destructive">
                    <AlertTriangle />

                    <AlertTitle>This action cannot be undone</AlertTitle>

                    <AlertDescription>
                        The delivery will be permanently removed from the
                        application. Make sure you want to continue.
                    </AlertDescription>
                </Alert>

                <DialogFooter>
                    <Button variant="destructive" onClick={handleDelete}>
                        Delete
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
