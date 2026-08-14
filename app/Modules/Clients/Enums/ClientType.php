<?php
namespace App\Modules\Clients\Enums;


enum ClientType: string
{
    case RETAIL = 'retail';
    case COMMERCIAL = 'commercial';

    public function label(): string
    {
        return match ($this) {
            self::RETAIL => 'Retail',
            self::COMMERCIAL => 'Commercial',
        };
    }
}
