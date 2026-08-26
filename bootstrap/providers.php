<?php

use App\Modules\Clients\Providers\ClientServiceProvider;
use App\Modules\Delivery\Providers\DeliveryServiceProvider;
use App\Modules\Orders\Providers\OrderServiceProvider;
use App\Providers\AppServiceProvider;
use App\Providers\FortifyServiceProvider;
use App\Modules\Product\Providers\ProductServiceProvider;

return [
    AppServiceProvider::class,
    FortifyServiceProvider::class,
    ProductServiceProvider::class,
    DeliveryServiceProvider::class,
    ClientServiceProvider::class,
    OrderServiceProvider::class,
];
