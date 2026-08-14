<?php

namespace App\Modules\Delivery\Services;

use App\Models\User;
use App\Modules\Delivery\Actions\DeleteDelivery;
use App\Modules\Delivery\Actions\ListDeliveries;
use App\Modules\Delivery\Actions\StoreDelivery;
use App\Modules\Delivery\Actions\UpdateDelivery;
use Illuminate\Database\Eloquent\Collection;

class DeliveryServices
{
    protected $listDeliveries;
    protected $storeDelivery;
    protected $updateDelivery;
    protected $deleteDelivery;

    public function __construct(
        ListDeliveries $listDeliveries,
        StoreDelivery $storeDelivery,
        UpdateDelivery $updateDelivery,
        DeleteDelivery $deleteDelivery
    ) {
        $this->listDeliveries = $listDeliveries;
        $this->storeDelivery = $storeDelivery;
        $this->updateDelivery = $updateDelivery;
        $this->deleteDelivery = $deleteDelivery;
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

    public function delete(User $delivery): User
    {
        return $this->deleteDelivery->execute($delivery);
    }
}
