<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    public function baskets()
{
    return $this->hasMany(Basket::class);
}

public function deliveries()
{
    return $this->belongsTo(Delivery::class);
}

public function users()
{
    return $this->belongsTo(User::class);
}
}
