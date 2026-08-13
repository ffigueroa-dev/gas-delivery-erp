<?php

namespace App\Modules\Product\Actions;

use App\Modules\Product\Models\Product;
use App\Modules\Product\Models\ProductPrice;

final class StoreProductPrice
{
    public function execute(Product $product, array $data): ProductPrice
    {
        return $product->prices()->create([
            'type' => $data['type'],
            'amount' => $data['amount'],
        ]);
    }
}
