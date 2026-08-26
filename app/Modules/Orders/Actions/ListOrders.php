<?php

namespace App\Modules\Orders\Actions;

use App\Modules\Orders\Models\Order;
use Illuminate\Support\Collection;

class ListOrders
{
    public function execute(): Collection
    {
        return Order::with(['client', 'delivery', 'orderProducts.product'])->get();
    }
}
