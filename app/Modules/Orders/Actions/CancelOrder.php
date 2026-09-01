<?php

namespace App\Modules\Orders\Actions;

use App\Modules\Orders\Enums\OrderStatus;
use App\Modules\Orders\Models\Order;

class CancelOrder
{
    public function execute(Order $order): Order
    {
        $order->update(['status' => OrderStatus::CANCELLED]);
        return $order;
    }
}
