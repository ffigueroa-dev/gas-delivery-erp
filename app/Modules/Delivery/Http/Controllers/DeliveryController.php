<?php

namespace App\Modules\Delivery\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Delivery\Http\Resources\DeliveryResource;
use App\Modules\Delivery\Services\DeliveryServices;
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
}
