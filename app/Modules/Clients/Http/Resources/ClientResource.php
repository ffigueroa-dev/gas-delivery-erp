<?php

namespace App\Modules\Clients\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Override;

class ClientResource extends JsonResource
{
    #[Override]
    public function toArray(Request $request): array
    {
        return [
            'name' => $this->name,
            'phone' => $this->phone,
            'type' => $this->type,
            'full_address' => $this->full_address,
            'address_reference' => $this->address_reference,
            'active' => $this->active
        ];
    }
}
