<?php

namespace App\Modules\Delivery\Actions;

use App\Models\User;

class UpdateDelivery
{
    public function execute(User $delivery, array $data): User
    {
        $delivery->update([
            'name' => $data['name'],
            'email' => $data['email'],
        ]);
        return $delivery;
    }
}
