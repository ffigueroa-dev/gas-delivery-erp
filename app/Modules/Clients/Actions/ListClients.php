<?php

namespace App\Modules\Clients\Actions;

use App\Modules\Clients\Models\Client;
use Illuminate\Support\Collection;

class ListClients
{
    public function execute(): Collection
    {
        return Client::all();
    }
}
