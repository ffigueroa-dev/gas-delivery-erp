<?php

namespace App\Modules\Clients\Http\Requests;

use App\Modules\Clients\Enums\ClientType;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreClientRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => [
                'required',
                'string',
                'min:4',
                'max:255',
            ],

            'phone' => [
                'nullable',
                'string',
                'min:5',
                'max:30',
            ],

            'type' => [
                'required',
                Rule::enum(ClientType::class),
            ],

            'full_address' => [
                'required',
                'string',
                'min:8',
                'max:255',
            ],

            'address_reference' => [
                'nullable',
                'string',
                'min:8',
                'max:255',
            ],
        ];
    }
}
