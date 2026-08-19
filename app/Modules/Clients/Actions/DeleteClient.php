<?php

namespace App\Modules\Clients\Actions;

use App\Modules\Clients\Models\Client;

class DeleteClient
{
    public function execute(Client $client): Client
    {
        $client->delete();
        return $client;
    }
}
