<?php

namespace App\Modules\Orders\Services;

use App\Modules\Orders\Actions\ListOrders;
use Illuminate\Support\Collection;

class OrderService
{
    public function __construct(
        protected ListOrders $listOrders,
    ) {}

    public function listOrders(): Collection
    {
        return $this->listOrders->execute();
    }
}
