<?php

namespace Database\Seeders;

use App\Enums\Role;
use App\Models\User;
use Illuminate\Database\Seeder;

class AdminUserSeeder extends Seeder
{
    public function run(): void
    {
        $user = User::updateOrCreate(
            [
                'email' => env('ADMIN_EMAIL'),
            ],
            [
                'name' => env('ADMIN_NAME', 'Administrador'),
                'password' => env('ADMIN_PASSWORD'),
            ]
        );

        $user->assignRole(Role::ADMIN->value);
    }
}
