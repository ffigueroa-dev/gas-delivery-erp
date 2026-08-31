<?php

namespace App\Modules\Orders\Actions;

use App\Modules\Orders\Models\OrderProduct;

class StoreOrderProduct
{
    public function execute(array $data): OrderProduct
    {
    $orderProduct = OrderProduct::create([
        'order_id'=> $data['order_id'],
        'product_id'=> $data['product_id'],
        'current_price'=> $data['current_price'],
        'quantity'=> $data['quantity'],
        'subtotal'=> $data['subtotal']
    ]);
    return $orderProduct;
    }
}
