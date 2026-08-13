import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { formatCurrency } from '@/utils/formatCurrency';
import type { Product } from '../types/Product';
import { Button } from '@/components/ui/button';
import { Pen, Trash } from 'lucide-react';
import { useState } from 'react';
import { DeleteProductDialog } from './DeleteProductDialog';
import { Link } from '@inertiajs/react';
import { edit } from '@/routes/products';

interface ProductCardProps {
    product: Product;
}

const priceLabels = {
    retail: 'Retail',
    commercial: 'Commercial',
} as const;

export function ProductCard({ product }: ProductCardProps) {
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

    return (
        <Card className="transition-shadow hover:shadow-md">
            <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-3">
                <div>
                    <CardTitle className="text-base">{product.name}</CardTitle>

                    {product.description && (
                        <p className="mt-1 text-sm text-muted-foreground">
                            {product.description}
                        </p>
                    )}
                </div>

                <Badge
                    variant={product.active ? 'default' : 'secondary'}
                    className="ml-3"
                >
                    {product.active ? 'Active' : 'Inactive'}
                </Badge>
            </CardHeader>

            <CardContent className="space-y-2 pt-0">
                {product.prices.map((price) => (
                    <div
                        key={price.id}
                        className="flex items-center justify-between text-sm"
                    >
                        <span className="text-muted-foreground">
                            {priceLabels[price.type]}
                        </span>

                        <span className="font-semibold">
                            {formatCurrency(price.amount)}
                        </span>
                    </div>
                ))}
            </CardContent>
            <CardFooter className="flex items-center justify-between">
                <Button variant="secondary" asChild>
                    <Link href={edit(product.id)}>
                        <Pen />
                        <span>Edit</span>
                    </Link>
                </Button>
                <Button
                    variant="destructive"
                    onClick={() => setDeleteDialogOpen(true)}
                >
                    <Trash />
                    <span>Delete</span>
                </Button>
            </CardFooter>
            <DeleteProductDialog
                isOpen={deleteDialogOpen}
                setIsOpen={setDeleteDialogOpen}
                product={product}
            />
        </Card>
    );
}
