<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name')->default('Product Name');;
            // $table->foreignId('variety_id')->default(1)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->string('country')->nullable();
            $table->string('description')->nullable();
            $table->string('cooking_method')->nullable();
            $table->string('img')->nullable();
            $table->string('variety')->nullable();
            $table->string('collections')->nullable();



            $table->integer('price')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
