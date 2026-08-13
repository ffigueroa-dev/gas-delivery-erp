<?php

use App\Modules\Product\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::prefix('/products')->group(function () {
    Route::get('/', [ProductController::class, 'index'])->name('products');
    Route::get('/create', [ProductController::class, 'create'])->name('products.create');
    Route::post('/', [ProductController::class, 'store'])->name('products.store');
    Route::delete('/{product}', [ProductController::class, 'delete'])->name('products.delete');
    Route::get('/{product}/edit', [ProductController::class, 'edit'])->name('products.edit');
    Route::patch('/{product}/update', [ProductController::class, 'update'])->name('products.update');
});
