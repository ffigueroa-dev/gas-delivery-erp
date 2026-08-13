<?php

namespace App\Modules\Product\Actions;

use App\Modules\Product\Models\Product;
use Illuminate\Support\Facades\DB;

final class StoreProduct
{
    public function execute(array $data): Product
    {
        return DB::transaction(function () use ($data): Product {
            $product = Product::query()->create([
                'name' => $data['name'],
                'description' => $data['description'] ?? null,
                'active' => true,
            ]);

            $product->prices()->createMany($data['prices']);

            return $product;
        });
    }
}
