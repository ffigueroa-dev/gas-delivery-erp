<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Modules\Product\Database\Seeders\ProductsSeeder;
class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            RoleSeeder::class,
            AdminUserSeeder::class,
            ProductsSeeder::class
        ]);
    }
}
