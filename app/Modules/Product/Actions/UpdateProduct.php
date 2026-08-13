<?php

namespace App\Modules\Product\Actions;

use App\Modules\Product\Models\Product;
use Illuminate\Support\Facades\DB;

final class UpdateProduct
{
    public function execute(Product $product, array $data): Product
    {
        return DB::transaction(function () use ($product, $data): Product {
            $product->update([
                'name' => $data['name'],
                'description' => $data['description'] ?? null,
                'active' => $data['active'] ?? $product->active,
            ]);

            $priceTypes = collect($data['prices'])
                ->pluck('type')
                ->all();

            $product->prices()
                ->whereNotIn('type', $priceTypes)
                ->delete();

            foreach ($data['prices'] as $price) {
                $product->prices()->updateOrCreate(
                    [
                        'type' => $price['type'],
                    ],
                    [
                        'amount' => $price['amount'],
                    ],
                );
            }

            return $product->refresh()->load('prices');
        });
    }
}
