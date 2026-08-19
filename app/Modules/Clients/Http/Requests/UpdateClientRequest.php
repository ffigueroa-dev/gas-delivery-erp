<?php

namespace App\Modules\Clients\Http\Requests;

use App\Modules\Clients\Enums\ClientType;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateClientRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => [
                'sometimes',
                'required',
                'string',
                'min:4',
                'max:255',
            ],

            'phone' => [
                'sometimes',
                'nullable',
                'string',
                'min:5',
                'max:30',
            ],

            'type' => [
                'sometimes',
                'required',
                Rule::enum(ClientType::class),
            ],

            'full_address' => [
                'sometimes',
                'required',
                'string',
                'min:8',
                'max:255',
            ],

            'address_reference' => [
                'sometimes',
                'nullable',
                'string',
                'min:8',
                'max:255',
            ],

            'active' => [
                'sometimes',
                'required',
                'boolean',
            ],
        ];
    }
}
