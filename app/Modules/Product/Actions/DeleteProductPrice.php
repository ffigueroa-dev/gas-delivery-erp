<?php

namespace App\Modules\Product\Actions;

use App\Modules\Product\Models\ProductPrice;

final class DeleteProductPrice
{
    public function execute(ProductPrice $productPrice): void
    {
        $productPrice->delete();
    }
}
