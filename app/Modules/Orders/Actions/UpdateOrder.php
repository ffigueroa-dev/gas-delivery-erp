<?php

namespace App\Modules\Orders\Actions;

use App\Modules\Orders\Actions\StoreOrderProduct;
use App\Modules\Orders\Models\Order;
use App\Modules\Product\Models\Product;
use BcMath\Number;
use Illuminate\Support\Facades\DB;
use Exception;

class UpdateOrder
{
    public function __construct(
        protected StoreOrderProduct $storeOrderProduct
    ) {}

    public function execute(Order $order, array $data): Order
    {
        return DB::transaction(function () use ($order, $data) {

            $this->validateProducts($order, $data['products']);
            $products = $this->separateProducts($order, $data['products']);

            $this->deleteRemovedProducts(
                $order,
                $products['removedProductIds']
            );


            $this->updateExistingProducts(
                $order,
                $products['updated']
            );

            $this->storeNewOrderProducts(
                $order,
                $products['new']
            );
            $totalAmount = $this->getTotalOrderAmount($order, $data['products']);;
            $order->update([
                'client_id' => $data['client_id'],
                'delivery_id' => $data['delivery_id'],
                'notes' => $data['notes'] ?? null,
                'total_amount' => $totalAmount,
            ]);
            return $order->fresh();
        });
    }

    public function getTotalOrderAmount(Order $order, array $products): string
    {
        $productIds = array_map(
            fn($product) => $product['id'],
            $products
        );

        $productsFromDatabase = Product::query()
            ->whereIn('id', $productIds)
            ->get();

        $client = $order->client;

        $total = 0;

        foreach ($productsFromDatabase as $product) {
            $productData = array_find(
                $products,
                fn($productData) => $productData['id'] === $product->id
            );

            $quantity = $productData['quantity'];

            $price = $product
                ->getPriceForClientType($client->type)
                ->amount;

            $total += $price * $quantity;
        }

        return number_format($total, 2, '.', '');
    }
    public function updateExistingProducts(Order $order, array $products): void
    {
        $productIds = array_map(
            fn($product) => $product['id'],
            $products
        );

        $orderProducts = $order->orderProducts()
            ->with('product')
            ->whereIn('product_id', $productIds)
            ->get();

        $client = $order->client;
        foreach ($orderProducts as $orderProduct) {
            $productData = array_find(
                $products,
                fn($product) => $product['id'] === $orderProduct->product_id
            );

            $quantity = $productData['quantity'];
            $currentPrice = $orderProduct->product->getPriceForClientType($client->type)->amount;

            $orderProduct->update([
                'current_price' => $currentPrice,
                'quantity' => $quantity,
                'subtotal' => $currentPrice * $quantity,
            ]);
        }
    }

    public function deleteRemovedProducts(Order $order, array $productIds): void
    {
        $order->orderProducts()
            ->whereIn('product_id', $productIds)
            ->delete();
    }

    public function storeNewOrderProducts(Order $order, array $products): void
    {
        // TODO: implement create many
        $productIds = array_map(
            fn($product) => $product['id'],
            $products
        );

        $currentProducts = Product::query()
            ->with('prices')
            ->whereIn('id', $productIds)
            ->get()
            ->keyBy('id');

        $client = $order->client;

        foreach ($products as $productData) {
            $product = $currentProducts->get($productData['id']);

            $price = $product
                ->getPriceForClientType($client->type)
                ->amount;

            $quantity = $productData['quantity'];

            $subtotal = $price * $quantity;

            $this->storeOrderProduct->execute([
                'order_id' => $order->id,
                'product_id' => $product->id,
                'current_price' => $price,
                'quantity' => $quantity,
                'subtotal' => $subtotal,
            ]);
        }
    }

    public function validateProducts(Order $order, array $products): void
    {
        $orderProductIds = $order->orderProducts()
            ->pluck('product_id')
            ->toArray();

        $productIds = collect($products)
            ->pluck('id')
            ->toArray();

        $newProductIds = array_diff($productIds, $orderProductIds);

        $newProducts = Product::query()
            ->whereIn('id', $newProductIds)
            ->get();

        foreach ($newProducts as $product) {
            if (!$product->active) {
                throw new Exception('All new products should be active');
            }
        }
    }

    private function separateProducts(Order $order, array $products): array
    {
        $existingProducts = $order->orderProducts()
            ->get()
            ->keyBy('product_id');

        $incomingProducts = collect($products)
            ->keyBy('id');

        $new = [];
        $updated = [];
        $removed = [];

        foreach ($incomingProducts as $productId => $productData) {
            if (!$existingProducts->has($productId)) {
                $new[] = $productData;
                continue;
            }

            $updated[] = $productData;
        }

        foreach ($existingProducts as $productId => $orderProduct) {
            if (!$incomingProducts->has($productId)) {
                $removed[] = $productId;
            }
        }

        return [
            'new' => $new,
            'updated' => $updated,
            'removedProductIds' => $removed,
        ];
    }
}
