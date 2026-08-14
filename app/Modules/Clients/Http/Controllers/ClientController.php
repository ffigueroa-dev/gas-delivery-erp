<?php
namespace App\Modules\Clients\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Modules\Clients\Http\Resources\ClientResource;
use App\Modules\Clients\Services\ClientService;
use Inertia\Inertia;
use Inertia\Response;

class ClientController extends Controller
{
    public function __construct(
        protected ClientService $clientService,
    ) {}

    public function index(): Response
    {
        $clients =  $this->clientService->listClients();
        return Inertia::render(
            'client/Index',
            [
                'clients' => ClientResource::collection($clients)
            ]
        );
    }
}
