import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import { Client } from '@/modules/client/types/Client';

type OrderClientProps = {
    client: Client | null;
};

const OrderClient = ({ client }: OrderClientProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Client</CardTitle>
            </CardHeader>

            <CardContent>
                {client ? (
                    <div className="space-y-3">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Name
                            </p>

                            <p className="font-medium">
                                {client.name}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Type
                            </p>

                            <p className="capitalize">
                                {client.type}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Phone
                            </p>

                            <p>
                                {client.phone ?? '—'}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Address
                            </p>

                            <p>
                                {client.full_address}
                            </p>

                            {client.address_reference && (
                                <p className="text-sm text-muted-foreground">
                                    {client.address_reference}
                                </p>
                            )}
                        </div>
                    </div>
                ) : (
                    <p className="text-muted-foreground">
                        No client assigned.
                    </p>
                )}
            </CardContent>
        </Card>
    );
};

export default OrderClient;
