<?php

namespace App\Modules\Delivery\Services;

use App\Models\User;
use App\Modules\Delivery\Actions\ListDeliveries;
use App\Modules\Delivery\Actions\StoreDelivery;
use App\Modules\Delivery\Actions\UpdateDelivery;
use Illuminate\Database\Eloquent\Collection;

class DeliveryServices
{
    protected $listDeliveries;
    protected $storeDelivery;
    protected $updateDelivery;
    public function __construct(
        ListDeliveries $listDeliveries,
        StoreDelivery $storeDelivery,
        UpdateDelivery $updateDelivery
    ) {
        $this->listDeliveries = $listDeliveries;
        $this->storeDelivery = $storeDelivery;
        $this->updateDelivery = $updateDelivery;
    }

    public function listDeliveries(): Collection
    {
        return $this->listDeliveries->execute();
    }

    public function storeDelivery(array $data): User
    {
        return $this->storeDelivery->execute($data);
    }

    public function update(User $delivery, array $data): User
    {
        return $this->updateDelivery->execute($delivery, $data);
    }
}
