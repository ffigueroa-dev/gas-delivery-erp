<?php

namespace App\Modules\Orders\Http\Requests;

use App\Models\User;
use App\Modules\Clients\Models\Client;
use App\Modules\Orders\Enums\OrderStatus;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Validator;

class UpdateOrderRequest extends FormRequest
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
                'exists:products,id',
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
            $order = $this->route('order');

            if ($order && $order->status !== OrderStatus::PENDING) {
                $validator->errors()->add(
                    'order',
                    'Only pending orders can be updated.'
                );
            }

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
