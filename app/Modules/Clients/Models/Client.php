<?php

namespace App\Modules\Clients\Models;

use App\Modules\Clients\Enums\ClientType;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Override;

class Client extends Model
{
    use HasUuids;
    protected $attributes = ['active' => true];
    protected $fillable = [
        'name',
        'phone',
        'type',
        'full_address',
        'address_reference',
        'active'
    ];
    #[Override]
    protected function casts()
    {
        return [
            'type' => ClientType::class,
        ];
    }
}
