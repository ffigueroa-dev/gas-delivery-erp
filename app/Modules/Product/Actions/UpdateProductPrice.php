<?php

namespace App\Modules\Product\Actions;

use App\Modules\Product\Models\ProductPrice;

final class UpdateProductPrice
{
    public function execute(
        ProductPrice $productPrice,
        array $data,
    ): ProductPrice {
        $productPrice->update([
            'type' => $data['type'] ?? $productPrice->type,
            'amount' => $data['amount'] ?? $productPrice->amount,
        ]);

        return $productPrice->refresh();
    }
}
