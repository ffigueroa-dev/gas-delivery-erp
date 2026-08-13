<?php

use App\Modules\Delivery\Http\Controllers\DeliveryController;
use Illuminate\Support\Facades\Route;

Route::prefix('/deliveries')->group(function () {
    Route::get('/', [DeliveryController::class, 'index'])->name('deliveries.index');
});
