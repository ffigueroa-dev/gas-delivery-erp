<?php

namespace App\Modules\Clients\Services;

use App\Modules\Clients\Actions\ListClients;
use App\Modules\Clients\Actions\StoreClient;
use App\Modules\Clients\Models\Client;
use Illuminate\Support\Collection;

class ClientService
{
    public function __construct(
        protected ListClients $listClients,
        protected StoreClient $storeClient
    ) {}

    public function listClients(): Collection
    {
        return $this->listClients->execute();
    }
    public function storeClient(array $data): Client
    {
        return $this->storeClient->execute($data);
    }
}
