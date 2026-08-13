<?php

namespace App\Modules\Delivery\Services;

use App\Modules\Delivery\Actions\ListDeliveries;
use Illuminate\Database\Eloquent\Collection;

class DeliveryServices
{
    protected $listDeliveries;
    public function __construct(ListDeliveries $listDeliveries)
    {
        $this->listDeliveries = $listDeliveries;
    }

    public function listDeliveries(): Collection
    {
        return $this->listDeliveries->execute();
    }
}
