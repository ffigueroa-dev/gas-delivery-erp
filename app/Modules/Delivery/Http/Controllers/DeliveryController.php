<?php

namespace App\Modules\Delivery\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Modules\Delivery\Http\Requests\StoreDeliveryRequest;
use App\Modules\Delivery\Http\Requests\UpdateDeliveryRequest;
use App\Modules\Delivery\Http\Resources\DeliveryResource;
use App\Modules\Delivery\Services\DeliveryServices;
use App\Support\Toast;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;

class DeliveryController extends Controller
{
    protected $deliveryService;
    public function __construct(DeliveryServices $deliveryServices)
    {
        $this->deliveryService = $deliveryServices;
    }

    public function index(): Response
    {
        $deliveries =  $this->deliveryService->listDeliveries();
        return Inertia::render('delivery/Index', [
            'deliveries' => DeliveryResource::collection($deliveries)
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('delivery/Create');
    }

    public function store(StoreDeliveryRequest $request): RedirectResponse
    {
        try {
            $data = $request->validated();
            $this->deliveryService->storeDelivery($data);
            Toast::success('Delivery created successfully');

            return redirect()
                ->route('deliveries.index');
        } catch (\Throwable $th) {
            Log::error('Error creating product', [
                'error' => $th->getMessage(),
                'user_id' => Auth::id(),
                'data' => $request->validated(),
            ]);
            Toast::error('Failed to create a new delivery');
            return redirect()
                ->back();
        }
    }

    public function edit(User $delivery): Response
    {
        return Inertia::render('delivery/Edit', [
            'delivery' => new DeliveryResource($delivery)
        ]);
    }

    public function update(User $delivery, UpdateDeliveryRequest $request): RedirectResponse
    {
        try {
            $data =  $request->validated();
            $this->deliveryService->update($delivery, $data);
            Toast::success('Delivery updated successfully');
            return redirect()
                ->route('deliveries.index');
        } catch (\Throwable $th) {
            Log::error('Error updating delivery', [
                'error' => $th->getMessage(),
                'user_id' => Auth::id(),
                'data' => $request->validated()
            ]);
            Toast::error('There was an error updating the delivery');
            return redirect()->back();
        }
    }
}
