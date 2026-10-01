import { Separator } from '@/components/ui/separator';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

import { OrderProduct } from '../types/OrderProduct';

type OrderProductsProps = {
    products: OrderProduct[];
    totalAmount: string;
};

const OrderProducts = ({
    products,
    totalAmount,
}: OrderProductsProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Products</CardTitle>
            </CardHeader>

            <CardContent>
                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Product</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>Quantity</TableHead>
                                <TableHead className="text-right">
                                    Subtotal
                                </TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {products.map((orderProduct) => (
                                <TableRow key={orderProduct.id}>
                                    <TableCell>
                                        <div>
                                            <p className="font-medium">
                                                {orderProduct.product.name}
                                            </p>

                                            {orderProduct.product.description && (
                                                <p className="text-sm text-muted-foreground">
                                                    {orderProduct.product.description}
                                                </p>
                                            )}
                                        </div>
                                    </TableCell>

                                    <TableCell>
                                        ${orderProduct.current_price}
                                    </TableCell>

                                    <TableCell>
                                        {orderProduct.quantity}
                                    </TableCell>

                                    <TableCell className="text-right font-medium">
                                        ${orderProduct.subtotal}
                                    </TableCell>
                                </TableRow>
                            ))}

                            {products.length === 0 && (
                                <TableRow>
                                    <TableCell
                                        colSpan={4}
                                        className="h-24 text-center text-muted-foreground"
                                    >
                                        No products in this order.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>

                <div className="mt-6 flex justify-end">
                    <div className="w-full max-w-sm space-y-2">
                        <Separator />

                        <div className="flex items-center justify-between pt-2">
                            <span className="text-lg font-semibold">
                                Total
                            </span>

                            <span className="text-lg font-bold">
                                ${totalAmount}
                            </span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default OrderProducts;
