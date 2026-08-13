<?php

namespace App\Modules\Product\Actions;

use App\Modules\Product\Models\Product;
use Illuminate\Database\Eloquent\Collection;

final class ListProducts
{
    public function execute(): Collection
    {
        return Product::query()
            ->with('prices')
            ->get();
    }
}
