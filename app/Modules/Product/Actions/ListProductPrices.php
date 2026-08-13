<?php

namespace App\Modules\Product\Actions;

use App\Modules\Product\Models\Product;
use Illuminate\Database\Eloquent\Collection;

final class ListProductPrices
{
    public function execute(Product $product): Collection
    {
        return $product->prices()
            ->orderBy('type')
            ->get();
    }
}
