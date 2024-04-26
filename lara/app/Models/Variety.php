<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Variety extends Model
{
    use HasFactory;
    public function products()
{
    return $this->hasMany(Product::class);
}

public function baskets()
{
    return $this->hasMany(Basket::class);
}
}
