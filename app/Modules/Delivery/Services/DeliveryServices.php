<?php

namespace App\Modules\Delivery\Services;

use App\Models\User;
use App\Modules\Delivery\Actions\ListDeliveries;
use App\Modules\Delivery\Actions\StoreDelivery;
use Illuminate\Database\Eloquent\Collection;

class DeliveryServices
{
    protected $listDeliveries;
    protected $storeDelivery;
    public function __construct(
        ListDeliveries $listDeliveries,
        StoreDelivery $storeDelivery
    ) {
        $this->listDeliveries = $listDeliveries;
        $this->storeDelivery = $storeDelivery;
    }

    public function listDeliveries(): Collection
    {
        return $this->listDeliveries->execute();
    }

    public function storeDelivery($data): User
    {
        return $this->storeDelivery->execute($data);
    }
}
