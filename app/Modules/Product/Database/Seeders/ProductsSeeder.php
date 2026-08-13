<?php

namespace App\Modules\Product\Database\Seeders;

use App\Modules\Product\Enums\PriceType;
use App\Modules\Product\Models\Product;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductsSeeder extends Seeder
{
    public function run(): void
    {
        DB::transaction(function (): void {
            $garrafa10kg = Product::updateOrCreate(
                [
                    'name' => 'Garrafa 10kg',
                ],
                [
                    'description' => 'Garrafa de gas de 10 kilogramos',
                    'active' => true,
                ]
            );

            $garrafa10kg->prices()->updateOrCreate(
                [
                    'type' => PriceType::RETAIL,
                ],
                [
                    'amount' => 27000,
                ]
            );

            $garrafa10kg->prices()->updateOrCreate(
                [
                    'type' => PriceType::COMMERCIAL,
                ],
                [
                    'amount' => 23000,
                ]
            );

            $garrafa10kgYpf = Product::updateOrCreate(
                [
                    'name' => 'Garrafa 10kg YPF',
                ],
                [
                    'description' => 'Garrafa de gas YPF de 10 kilogramos',
                    'active' => true,
                ]
            );

            $garrafa10kgYpf->prices()->updateOrCreate(
                [
                    'type' => PriceType::RETAIL,
                ],
                [
                    'amount' => 30000,
                ]
            );

            $garrafa10kgYpf->prices()->updateOrCreate(
                [
                    'type' => PriceType::COMMERCIAL,
                ],
                [
                    'amount' => 25000,
                ]
            );

            $garrafa15kg = Product::updateOrCreate(
                [
                    'name' => 'Garrafa 15kg',
                ],
                [
                    'description' => 'Garrafa de gas de 15 kilogramos',
                    'active' => true,
                ]
            );

            $garrafa15kg->prices()->updateOrCreate(
                [
                    'type' => PriceType::RETAIL,
                ],
                [
                    'amount' => 43000,
                ]
            );
            $garrafa15kg->prices()->updateOrCreate(
                [
                    'type' => PriceType::COMMERCIAL,
                ],
                [
                    'amount' => 43000,
                ]
            );
        });
    }
}
