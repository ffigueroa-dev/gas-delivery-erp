<?php

use App\Modules\Orders\Http\Controllers\OrderController;
use Illuminate\Support\Facades\Route;

Route::prefix('orders')->group(function () {
    Route::get('/', [OrderController::class, 'index'])->name('orders.index');
});
