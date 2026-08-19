<?php

namespace App\Modules\Clients\Actions;

use App\Modules\Clients\Models\Client;

class UpdateClient
{
    public function execute(Client $client, array $data): Client
    {
        $client->update($data);
        return $client;
    }
}
