<?php

namespace App\Modules\Product\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProductPriceRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'amount' => [
                'required',
                'integer',
                'min:0',
            ],
        ];
    }
}
