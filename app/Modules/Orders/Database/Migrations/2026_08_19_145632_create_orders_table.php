<?php

use App\Modules\Orders\Enums\OrderStatus;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->uuid('id')->primary();

            $table->foreignUuid('client_id')
                ->nullable()
                ->constrained('clients');

            $table->foreignUuid('delivery_id')
                ->constrained('users');

            $table->string('status')
                ->default(OrderStatus::PENDING);

            $table->string('notes')
                ->nullable();

            $table->decimal('total_amount', 12, 2);

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
