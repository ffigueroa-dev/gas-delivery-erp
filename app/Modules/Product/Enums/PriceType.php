<?php
namespace App\Modules\Product\Enums;

enum PriceType: string
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
