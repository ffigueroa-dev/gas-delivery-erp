<?php

namespace App\Modules\Delivery\Actions;

use App\Enums\Role;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;


class ListDeliveries
{
    public function execute(): Collection
    {
        $users = User::role(Role::DELIVERY)->get();
        return $users;
    }
}
