<?php

namespace App\Modules\Clients\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Clients\Enums\ClientType;
use App\Modules\Clients\Http\Requests\StoreClientRequest;
use App\Modules\Clients\Http\Resources\ClientResource;
use App\Modules\Clients\Services\ClientService;
use App\Support\Toast;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
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

    public function create(): Response
    {
        return Inertia::render('client/Create', [
            'clientTypes' => collect(ClientType::cases())
                ->map(fn(ClientType $type) => [
                    'value' => $type->value,
                    'label' => $type->label(),
                ]),
        ]);
    }

    public function store(StoreClientRequest $request): RedirectResponse
    {
        try {
            $data = $request->validated();
            $this->clientService->storeClient($data);
            return redirect()
                ->route('clients.index');
        } catch (\Throwable $th) {
            Log::error('Error creating client', [
                'error' => $th->getMessage(),
                'user_id' => Auth::id(),
                'data' => $request->validated()
            ]);
            Toast::error('There was an error creating the client');
            return redirect()->back();
        }
    }
}
