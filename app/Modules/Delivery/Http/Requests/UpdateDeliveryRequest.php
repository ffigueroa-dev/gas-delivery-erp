<?php

namespace App\Modules\Delivery\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateDeliveryRequest extends FormRequest
{
    public function rules(): array
    {
        $delivery = $this->route('delivery');

        return [
            'name' => [
                'required',
                'string',
                'max:255',
            ],

            'email' => [
                'required',
                'email',
                'max:255',
                Rule::unique('users', 'email')
                    ->ignore($delivery->id),
            ],
        ];
    }
}
