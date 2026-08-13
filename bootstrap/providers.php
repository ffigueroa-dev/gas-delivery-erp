<?php

use App\Modules\Delivery\Providers\DeliveryServiceProvider;
use App\Providers\AppServiceProvider;
use App\Providers\FortifyServiceProvider;
use App\Modules\Product\Providers\ProductServiceProvider;

return [
    AppServiceProvider::class,
    FortifyServiceProvider::class,
    ProductServiceProvider::class,
    DeliveryServiceProvider::class,
];
