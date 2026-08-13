<?php

namespace App\Modules\Product\Actions;

use App\Modules\Product\Models\Product;

final class DeleteProduct
{
    public function execute(Product $product): Product
    {
        $product->delete();

        return $product;
    }
}
