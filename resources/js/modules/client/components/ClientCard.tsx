import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Client } from '../types/Client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Pen, Phone, Trash } from 'lucide-react';
import { TruncatedText } from '@/components/common/truncated-text';
import { Link } from '@inertiajs/react';
import { edit } from '@/routes/clients';

interface ProductCardProps {
    client: Client;
}
export const ClientCard = ({ client }: ProductCardProps) => {
    return (
        <Card className="w-full max-w-sm transition-shadow hover:shadow-md">
            <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-3">
                <div>
                    <CardTitle className="text-base">{client.name}</CardTitle>
                </div>
                <Badge
                    variant={client.active ? 'default' : 'secondary'}
                    className="ml-3"
                >
                    {client.active ? 'Active' : 'Inactive'}
                </Badge>
            </CardHeader>
            <CardContent className="space-y-3">
                <div className="flex items-start gap-2 text-sm">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-muted-foreground" />

                    <div className="min-w-0 flex-1">
                        <TruncatedText
                            text={client.full_address}
                            className="text-muted-foreground"
                        />
                    </div>
                </div>

                {client.phone && (
                    <div className="flex items-center gap-2 text-sm">
                        <Phone className="size-4 shrink-0 text-muted-foreground" />

                        <TruncatedText
                            text={client.phone}
                            className="text-muted-foreground"
                        />
                    </div>
                )}

                {client.address_reference && (
                    <div className="text-sm">
                        <span className="text-muted-foreground">
                            Reference:{' '}
                        </span>

                        <TruncatedText
                            text={client.address_reference}
                            className="inline-block max-w-full align-bottom"
                        />
                    </div>
                )}

                <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Type</span>

                    <Badge variant="outline" className="capitalize">
                        {client.type}
                    </Badge>
                </div>
            </CardContent>
            <CardFooter className="mt-auto flex items-center justify-between">
                <Button asChild>
                    <Link href={edit(client.id)}>
                        <Pen />
                        <span>Edit</span>
                    </Link>
                </Button>
                <Button variant={'destructive'}>
                    <Trash />
                    <span>Delete</span>
                </Button>
            </CardFooter>
        </Card>
    );
};
