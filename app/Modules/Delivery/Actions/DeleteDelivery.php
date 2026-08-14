<?php

namespace App\Modules\Delivery\Actions;

use App\Models\User;

class DeleteDelivery
{
    public function execute(User $delivery): User
    {
        $delivery->delete();
        return $delivery;
    }
}
