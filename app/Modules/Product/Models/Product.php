<?php

namespace App\Modules\Product\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Modules\Product\Models\ProductPrice;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use HasUuids, SoftDeletes;

    protected $keyType = 'string';

    public $incrementing = false;

    protected $fillable = [
        'name',
        'description',
        'active'
    ];

    protected function casts(): array
    {
        return [
            'active' => 'boolean',
        ];
    }

    public function prices(): HasMany
    {
        return $this->hasMany(ProductPrice::class);
    }
}
