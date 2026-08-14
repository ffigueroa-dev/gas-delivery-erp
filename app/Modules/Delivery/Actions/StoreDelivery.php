<?php

namespace App\Modules\Delivery\Actions;

use App\Enums\Role;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class StoreDelivery
{
    public function execute($data): User
    {
        return DB::transaction(function () use ($data) {
            $user = User::create([
                'name' => $data['name'],
                'password' => $data['password'],
                'email' => $data['email'],
            ]);
            $user->assignRole(Role::DELIVERY->value);
            return $user;
        });
    }
}
