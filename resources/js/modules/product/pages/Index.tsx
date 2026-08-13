import { Head, Link } from '@inertiajs/react';
import { Plus } from 'lucide-react';
import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { products as productsRoute } from '@/routes';
import { create as createProduct } from '@/routes/products';
import { ProductCard } from '../components/ProductCard';
import type { Product } from '../types/Product';

interface IndexProps {
    products: {
        data: Product[];
    };
}

export default function Index({ products }: IndexProps) {
    return (
        <>
            <Head title="Productos" />

            <div className="p-6">
                <PageHeader title='Productos' description='Gestiona tus productos'>
                    <Button asChild size='icon'>
                        <Link href={createProduct()} prefetch>
                            <Plus />
                            <span className="sr-only">Create Product</span>
                        </Link>
                    </Button>
                </PageHeader>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                    {products.data.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

Index.layout = {
    breadcrumbs: [
        {
            title: 'Productos',
            href: productsRoute(),
        },
    ],
};
