<?php

namespace App\Modules\Orders\Http\Resources;

use App\Modules\Clients\Http\Resources\ClientResource;
use App\Modules\Delivery\Http\Resources\DeliveryResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,

            'client' => new ClientResource(
                $this->whenLoaded('client')
            ),

            'delivery' => new DeliveryResource(
                $this->whenLoaded('delivery')
            ),

            'status' => $this->status->value,

            'notes' => $this->notes,

            'total_amount' => $this->total_amount,

            'products' => OrderProductResource::collection(
                $this->whenLoaded('orderProducts')
            ),

            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
