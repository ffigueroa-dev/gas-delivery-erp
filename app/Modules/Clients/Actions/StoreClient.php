<?php

namespace App\Modules\Clients\Actions;

use App\Modules\Clients\Models\Client;

class StoreClient
{
    public function execute(array $data): Client
    {
        return Client::create($data);
    }
}
