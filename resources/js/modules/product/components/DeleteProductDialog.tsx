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
import { deleteMethod as deleteProduct } from '@/routes/products';
import type { Product } from '../types/Product';

type DeleteProductDialogProps = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    product: Product;
};

export const DeleteProductDialog = ({
    isOpen,
    setIsOpen,
    product,
}: DeleteProductDialogProps) => {
    const handleDelete = async () => {
        router.delete(deleteProduct({ id: product.id }).url, {
            onSuccess: (d) => console.log(d),
        });
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete Product</DialogTitle>
                    <DialogDescription>
                        Delete Product:{' '}
                        <span className="font-bold text-white">
                            {product.name}
                        </span>
                    </DialogDescription>
                </DialogHeader>
                <Alert variant="destructive">
                    <AlertTriangle />

                    <AlertTitle>This action cannot be undone</AlertTitle>

                    <AlertDescription>
                        The product will be permanently removed from the
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
