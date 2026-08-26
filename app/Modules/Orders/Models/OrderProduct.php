<?php

namespace App\Modules\Orders\Models;

use App\Modules\Orders\Enums\OrderStatus;
use App\Modules\Product\Models\Product;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class OrderProduct extends Model
{
    use HasUuids;
    protected $fillable = [
        'order_id',
        'product_id',
        'current_price',
        'quantity',
        'subtotal'
    ];

    public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class);
    }

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }
}
