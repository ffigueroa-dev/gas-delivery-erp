<?php

namespace App\Modules\Clients\Services;

use App\Modules\Clients\Actions\ListClients;
use Illuminate\Support\Collection;

class ClientService
{
    public function __construct(
        protected ListClients $listClients,
    ) {}

    public function listClients(): Collection
    {
        return $this->listClients->execute();
    }
}
