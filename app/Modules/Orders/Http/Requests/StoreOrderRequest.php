<?php

namespace App\Modules\Orders\Http\Requests;

use App\Enums\Role;
use App\Models\User;
use App\Modules\Clients\Models\Client;
use App\Modules\Product\Models\Product;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Validator;

class StoreOrderRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'notes' => ['nullable', 'string', 'min:4'],
            'client_id' => [
                'required',
                'required',
                Rule::exists(Client::class, 'id')
                    ->where('active', true),
            ],
            'delivery_id' => [
                'required',
                // Rule::exists(User::class, 'id')
                //     ->where('active', true),
            ],
            'products' => [
                'required',
                'array',
                'min:1',
            ],

            'products.*.id' => [
                'required',
                'distinct',
                Rule::exists(Product::class, 'id')
                    ->where('active', true),
            ],

            'products.*.quantity' => [
                'required',
                'integer',
                'min:1',
            ],
        ];
    }
    public function after(): array
    {
        return [
            function (Validator $validator) {
                $delivery = User::find($this->delivery_id);

                if ($delivery && !$delivery->isDelivery()) {
                    $validator->errors()->add(
                        'delivery_id',
                        'The selected user must be a delivery user.'
                    );
                }
            }
        ];
    }
}
