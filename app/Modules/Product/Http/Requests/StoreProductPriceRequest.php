<?php

namespace App\Modules\Product\Http\Requests;

use App\Modules\Product\Enums\PriceType;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreProductPriceRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'type' => [
                'required',
                Rule::enum(PriceType::class),
            ],
            'amount' => [
                'required',
                'integer',
                'min:0',
            ],
        ];
    }
}
