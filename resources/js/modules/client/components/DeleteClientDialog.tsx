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
import { Client } from '../types/Client';
import clients from '@/routes/clients';

type DeleteClientDialogProps = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    client: Client;
};

export const DeletClientDialog = ({
    isOpen,
    setIsOpen,
    client,
}: DeleteClientDialogProps) => {
    const handleDelete = async () => {
        router.delete(clients.delete({ id: client.id }).url, {
            onSuccess: (d) => console.log(d),
        });
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete Client</DialogTitle>
                    <DialogDescription>
                        Delete Client:{' '}
                        <span className="font-bold text-white">
                            {client.name}
                        </span>
                    </DialogDescription>
                </DialogHeader>
                <Alert variant="destructive">
                    <AlertTriangle />

                    <AlertTitle>This action cannot be undone</AlertTitle>

                    <AlertDescription>
                        The client will be permanently removed from the
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
