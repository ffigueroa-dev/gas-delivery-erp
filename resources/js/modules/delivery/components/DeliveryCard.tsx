import { Mail, Pen, Trash } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import type { Delivery } from '../types/Delivery';
import { Link } from '@inertiajs/react';
import { edit as editDeliveryRoute } from '@/routes/deliveries';

interface DeliveryCardProps {
    delivery: Delivery;
    onDelete?: (delivery: Delivery) => void;
}

export const DeliveryCard = ({ delivery, onDelete }: DeliveryCardProps) => {
    return (
        <Card className="transition-shadow hover:shadow-md">
            <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-3">
                <div>
                    <CardTitle className="text-base">{delivery.name}</CardTitle>

                    <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="size-4" />
                        <span>{delivery.email}</span>
                    </div>
                </div>

                <Badge variant="secondary" className="ml-3 capitalize">
                    {delivery.role}
                </Badge>
            </CardHeader>

            <CardFooter className="flex items-center justify-between">
                <Button variant="secondary" asChild>
                    <Link href={editDeliveryRoute(delivery.id)}>
                        <Pen />
                        <span>Edit</span>
                    </Link>
                </Button>

                <Button
                    variant="destructive"
                    onClick={() => onDelete?.(delivery)}
                >
                    <Trash />
                    <span>Delete</span>
                </Button>
            </CardFooter>
        </Card>
    );
};
