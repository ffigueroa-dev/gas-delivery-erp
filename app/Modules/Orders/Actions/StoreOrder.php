<?php

namespace App\Modules\Orders\Actions;

use App\Modules\Orders\Models\Order;

class StoreOrder
{
    public function execute(array $data): Order
    {
        $orderProduct = Order::create($data);
        return $orderProduct;
    }
}
