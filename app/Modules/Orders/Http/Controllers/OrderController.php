<?php

namespace App\Modules\Orders\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Orders\Http\Resources\OrderResource;
use App\Modules\Orders\Services\OrderService;
use Inertia\Inertia;
use Inertia\Response;

class OrderController extends Controller
{
    public function __construct(
        protected OrderService $orderService
    ) {}

    public function index(): Response
    {
        $orders = $this->orderService->listOrders();
        return Inertia::render('order/Index', [
            'orders' => OrderResource::collection($orders)
        ]);
    }
}
