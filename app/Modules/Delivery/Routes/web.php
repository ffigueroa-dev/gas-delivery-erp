<?php

use App\Modules\Delivery\Http\Controllers\DeliveryController;
use Illuminate\Support\Facades\Route;

Route::prefix('/deliveries')->group(function () {
    Route::get('/', [DeliveryController::class, 'index'])->name('deliveries.index');
    Route::get('/create', [DeliveryController::class, 'create'])->name('deliveries.create');
    Route::post('/', [DeliveryController::class, 'store'])->name('deliveries.store');

    Route::get('/{delivery}/edit', [DeliveryController::class, 'edit'])->name('deliveries.edit');
    Route::patch('/{delivery}/update', [DeliveryController::class, 'update'])->name('deliveries.update');
    Route::delete('/{delivery}', [DeliveryController::class, 'delete'])->name('deliveries.delete');
});
