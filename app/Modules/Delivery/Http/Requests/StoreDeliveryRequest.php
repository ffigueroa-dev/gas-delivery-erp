<?php

namespace App\Modules\Delivery\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class StoreDeliveryRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }
    public function rules(): array
    {
        return [
            'name' => [
                'required',
                'string',
                'max:255',
            ],

            'email' => [
                'required',
                'string',
                'min:5',
                'max:40',
                'unique:users,email'
            ],

            'password' => [
                'required',
                'string',
                Password::min(8)
            ],
        ];
    }
}
