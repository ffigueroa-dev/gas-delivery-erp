<?php

namespace App\Modules\Clients\Database\Seeders;

use App\Modules\Clients\Enums\ClientType;
use App\Modules\Clients\Models\Client;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ClientsSeeder extends Seeder
{
    public function run(): void
    {
        DB::transaction(function () {
            // Commercial - complete data
            Client::create([
                'name' => 'Central Market',
                'phone' => '1111111111',
                'type' => ClientType::COMMERCIAL,
                'full_address' => '123 Main Street',
                'address_reference' => 'Next to the pharmacy',
            ]);

            // Retail - complete data
            Client::create([
                'name' => 'John Smith',
                'phone' => '2222222222',
                'type' => ClientType::RETAIL,
                'full_address' => '456 Oak Avenue',
                'address_reference' => 'Blue gate',
            ]);

            // Commercial - without address reference
            Client::create([
                'name' => 'North Grocery',
                'phone' => '3333333333',
                'type' => ClientType::COMMERCIAL,
                'full_address' => '789 North Street',
                'address_reference' => null,
            ]);

            // Retail - without address reference
            Client::create([
                'name' => 'Michael Brown',
                'phone' => '4444444444',
                'type' => ClientType::RETAIL,
                'full_address' => '321 South Avenue',
                'address_reference' => null,
            ]);

            // Commercial - without phone
            Client::create([
                'name' => 'Downtown Store',
                'phone' => null,
                'type' => ClientType::COMMERCIAL,
                'full_address' => '654 Downtown Street',
                'address_reference' => 'Across from the gas station',
            ]);

            // Retail - without phone
            Client::create([
                'name' => 'Sarah Wilson',
                'phone' => null,
                'type' => ClientType::RETAIL,
                'full_address' => '987 West Avenue',
                'address_reference' => 'White house with black gate',
            ]);

            // Retail - without phone or address reference
            Client::create([
                'name' => 'David Miller',
                'phone' => null,
                'type' => ClientType::RETAIL,
                'full_address' => '147 East Street',
                'address_reference' => null,
            ]);

            // Commercial - without phone or address reference
            Client::create([
                'name' => 'South Market',
                'phone' => null,
                'type' => ClientType::COMMERCIAL,
                'full_address' => '258 South Street',
                'address_reference' => null,
            ]);

            // Inactive retail client
            Client::create([
                'name' => 'Inactive Retail Client',
                'phone' => '5555555555',
                'type' => ClientType::RETAIL,
                'full_address' => '369 Old Street',
                'address_reference' => 'Old red house',
                'active' => false,
            ]);

            // Inactive commercial client
            Client::create([
                'name' => 'Inactive Commercial Client',
                'phone' => null,
                'type' => ClientType::COMMERCIAL,
                'full_address' => '741 Industrial Avenue',
                'address_reference' => null,
                'active' => false,
            ]);
        });
    }
}
